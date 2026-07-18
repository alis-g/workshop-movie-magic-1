import { prisma } from "../lib/prisma"

async function getAll(filter = {}) {
    const artists = await prisma.artist.findMany({
        where: {
            id: {
                notIn: Array.isArray(filter.exclude) ? filter.exclude : []
            }
        }
    })
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