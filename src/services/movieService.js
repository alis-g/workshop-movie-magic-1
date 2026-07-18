import { moviesRepository } from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return moviesRepository.getAll(filter)
}

function getById(movieId){
    const id = Number(movieId)
    return moviesRepository.getById(id)
}
function create(movieData){
    movieData.rating = Number(movieData.rating)
    movieData.year = Number(movieData.year)
    return moviesRepository.create(movieData)
}

async function attach(movieId, artistId){
    const movieIdNum = Number(movieId)
    const artistIdNum = Number(artistId)
    const result = await moviesRepository.attach(movieIdNum, artistIdNum)

    return result
}

export const movieService = {
    getAll,
    create,
    getById,
    attach
}