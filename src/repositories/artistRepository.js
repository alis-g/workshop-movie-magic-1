import { prisma } from "../lib/prisma"

async function getAll() {
    const artists = await prisma.artist.findMany()
    return artists
}

async function  create(artistData) {
   const artist = await prisma.artist.create({
    data: artistData
   }) 
   return artist
}



export const artistRepository = {
    create,
    getAll
}