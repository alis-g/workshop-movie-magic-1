import { log } from 'console';
import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js'
import { connect } from 'http2';



async function getAll(filter = {}) {
    let movies = await prisma.movie.findMany()
    if(filter.search){
        movies = movies.filter(m => m.title.toLowerCase().includes(filter.search.toLowerCase()))
    }

    if(filter.year) {
        movies = movies.filter(movie => movie.year === filter.year)
    }

    if(filter.genre){
        movies = movies.filter(m => m.genre.toLowerCase() === filter.genre.toLowerCase() )
    }
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
