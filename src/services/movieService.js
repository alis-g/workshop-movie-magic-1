import { moviesRepository } from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return moviesRepository.getAll(filter)
}

function getById(movieId){
    return moviesRepository.getById(movieId)
}
function create(movieData){
    movieData.rating = Number(movieData.rating)
    movieData.year = Number(movieData.year)
    return moviesRepository.create(movieData)
}
export const movieService = {
    getAll,
    create,
    getById
}