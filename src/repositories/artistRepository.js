import { prisma } from "../lib/prisma"

async function  create(artistData) {
   const artist = await prisma.artist.create({
    data: artistData
   }) 
   return artist
}


export const artistRepository = {
    create
}