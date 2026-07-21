import { Router } from "express";
import { artistService } from "../services/artistService";
import { isAuth } from "../middleware/authMiddleware.js";

const artistController = Router()

 artistController.get('/create-cast',isAuth ,async (req, res) => {
    res.render('artists/cast-create');
    
});

artistController.post('/create-cast', isAuth, async (req, res) => {

    const newArtist = req.body

    await artistService.create(newArtist)

    res.redirect('/')

})

export default artistController