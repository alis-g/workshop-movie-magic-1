import { log } from 'console';
import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';

async function readDb(collection) {
    const content = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
    const db = JSON.parse(content);

    if (collection && !db.hasOwnProperty(collection)) {
        throw new Error('No collection');
    }

    return collection ? db[collection] : db;
}

async function writeDb(db) {
    const content =  JSON.stringify(db, null, 2)
    await fs.writeFile('./src/db.json', content, { encoding: 'utf-8' })
}

async function getAll() {
    const movies = await readDb('movies');
    return movies
}
async function getById(movieId) {
    const movies = await readDb('movies');

    console.log('movieId:', movieId);
    console.log('movies ids:', movies.map(m => m.id));

    const movie = movies.find(m => m.id === movieId);

    console.log('movie:', movie);

    return movie;
}
async function  create(movieData) {

    movieData.id = uuid()
    const db = await readDb();

    db.movies.push(movieData);

    await writeDb(db)
}


export const moviesRepository = {
    getAll,
    create,
    getById
}
