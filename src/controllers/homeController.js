import { Router } from "express";
import { moviesRepository } from "../repositories/movieRepository.js";

const homeController = Router();

homeController.get('/',async (req, res) => {
    const movies = await moviesRepository.getAll()
    res.render('home', {movies, pageTitle: 'Home Page'});
});

homeController.get('/about', (req, res) => {
    res.render('about')
})

export default homeController