import { moviesRepository } from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    filter.year = Number(filter.year)
    return moviesRepository.getAll(filter)
}

function getById(movieId) {
    const id = Number(movieId)
    return moviesRepository.getById(id)
}
function create(movieData, userId) {
    movieData.rating = Number(movieData.rating)
    movieData.year = Number(movieData.year)
    movieData.userId = userId
    return moviesRepository.create(movieData)
}

async function attach(movieId, artistId) {
    const movieIdNum = Number(movieId)
    const artistIdNum = Number(artistId)
    const result = await moviesRepository.attach(movieIdNum, artistIdNum)

    return result
}

async function remove(movieId, userId) {
    const movie = await moviesRepository.getById(movieId)

    if (!movie) {
        throw new Error("Movie not found")
    }

    if (movie.userId !== userId) {
        throw new Error("Unauthorized")
    }

    await moviesRepository.remove(movieId, userId)
}

async function edit(movieId, movieData, userId) {
    movieData.rating = Number(movieData.rating)
    movieData.year = Number(movieData.year)
    movieData.userId = userId
    await moviesRepository.edit(movieId, movieData, userId)
}

export const movieService = {
    getAll,
    create,
    getById,
    attach,
    remove,
    edit
}