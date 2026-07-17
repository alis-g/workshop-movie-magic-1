import { Router } from "express";

const artistController = Router()

 artistController.get('/create-cast',async (req, res) => {
    res.render('cast-create');
});

export default artistController