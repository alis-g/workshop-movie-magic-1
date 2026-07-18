import { Router } from "express";
import { artistService } from "../services/artistService";

const artistController = Router()

 artistController.get('/create-cast',async (req, res) => {
    res.render('artists/cast-create');
    
});

artistController.post('/create-cast', async (req, res) => {

    const newArtist = req.body

    await artistService.create(newArtist)

    res.redirect('/')

})

export default artistController