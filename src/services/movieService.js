import { moviesRepository } from "../repositories/movieRepository.js";

function getAll() {
    return moviesRepository.getAll()
}

export const movieService = {
    getAll,
}