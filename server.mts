import express from 'express';

const app = express();

app.all('/', (req, res) => {
    res.send('Connected!');
});

app.listen(3000, () => {
    console.log('listening...');
});