import { Router } from "express";

const movieController = Router();

movieController.get('/create', async (req,res) => {
    res.render('movies/create')
})

export default movieController;