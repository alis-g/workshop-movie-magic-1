import { moviesRepository } from "../repositories/movieRepository.js";

function getAll() {
    return moviesRepository.getAll()
}

function create(movieData){
    return moviesRepository.create(movieData)
}
export const movieService = {
    getAll,
    create,
}