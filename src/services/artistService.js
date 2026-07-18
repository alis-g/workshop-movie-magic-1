import { get } from "node:http";
import { artistRepository } from "../repositories/artistRepository.js";

function create (artistData){
    artistData.age = Number(artistData.age)
    return artistRepository.create(artistData)
}

function getAll (filter = {}){
    return artistRepository.getAll(filter)
}

export const artistService = {
    create,
    getAll
}