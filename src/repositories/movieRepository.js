import { log } from 'console';
import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js'
import { connect } from 'http2';



async function getAll(filter = {}) {
    let movies = await prisma.movie.findMany({
        where:{
            year: filter.year || undefined,
            genre: {
                equals: filter.genre || undefined,
                mode: 'insensitive'
            },
            title: {
                contains: filter.search,
                mode: 'insensitive'
            }
        }
    })

        return movies
}
async function getById(movieId) {
    const movies = await prisma.movie.findUnique({
        where:{id: movieId},
        include: {
            artists: true
        }
    });



    return movies;
}
async function  create(movieData) {
   const movie = await prisma.movie.create({
    data: movieData
   }) 
   return movie
}

async function  attach(movieId, artistId) {
  const result =  await prisma.movie.update({
        where: {id: movieId},
        data:{
            artists:{
                connect: {id: artistId}
            }
        }
    })
    return result
}

export const moviesRepository = {
    getAll,
    create,
    getById,
    attach
}
