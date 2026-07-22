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
    const movie = await prisma.movie.findUnique({
        where: { id: movieId },
        include: {
            artists: true
        }
    });

    if (!movie) {
        throw new Error('No movie found!');
    }

    return movie;
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

async function remove(movieId, userId) {
   const result= await prisma.movie.delete({
        where: {id: movieId, userId: userId}
    })

    return result
}

async function edit(movieId, movieData, userId) {
    const result = await prisma.movie.update({
        where: {id: movieId, userId: userId},
        data: movieData
    })
    return result
}

export const moviesRepository = {
    getAll,
    create,
    getById,
    attach,
    remove,
    edit
}
