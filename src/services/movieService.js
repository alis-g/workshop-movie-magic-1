import { moviesRepository } from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return moviesRepository.getAll(filter)
}

function getById(movieId){
    return moviesRepository.getById(movieId)
}
function create(movieData){
    return moviesRepository.create(movieData)
}
export const movieService = {
    getAll,
    create,
    getById
}