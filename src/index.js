import express from 'express';

const app = express();

app.get('/',(req, res) => {
    res.send('hellllo ddarkness')
})

app.listen(2000, () => console.log('Server is listening on  http://localhost:2000...'));