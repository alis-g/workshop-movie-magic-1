import { artistRepository } from "../repositories/artistRepository.js";

function create (artistData){
    artistData.age = Number(artistData.age)
    return artistRepository.create(artistData)
}

export const artistService = {
    create
}