import { log } from 'console';
import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js'


async function readDb(collection) {
    const content = await prisma.movie.findMany()

    if (collection && !db.hasOwnProperty(collection)) {
        throw new Error('No collection');
    }

    return collection ? db[collection] : db;
}

async function writeDb(db) {
    const content =  JSON.stringify(db, null, 2)
    await fs.writeFile('./src/db.json', content, { encoding: 'utf-8' })
}

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
        where:{
            id:movieId
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


export const moviesRepository = {
    getAll,
    create,
    getById
}
