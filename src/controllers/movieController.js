import { Router } from "express";
import { movieService } from "../services/movieService.js";

const movieController = Router();


movieController.get('/search', async (req, res) => {
    const filter = req.query;

    const movies = await movieService.getAll(filter);

    res.render('movies/search', { movies, filter, pageTitle: 'Search Movies' })
})
movieController.get('/create', async (req, res) => {
    res.render('movies/create', { pageTitle: 'Create Movies' })
})

movieController.post('/create', async (req, res) => {

    const newMovie = req.body

    await movieService.create(newMovie)

    res.redirect('/')

})

movieController.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getById(movieId);

    const ratingStars = '&#x2605;'.repeat(Math.floor(movie.rating))


    res.render('movies/details', { movie , ratingStars})
});

movieController.get('/search', async (req, res) => {
    res.render('search')
})

export default movieController;