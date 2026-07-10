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

async function getAll() {
    const movies = await readDb('movies');
    return movies
}

export const moviesR = {
    getAll
}
