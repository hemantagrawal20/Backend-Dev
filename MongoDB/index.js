const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/MongoDB1')
.then(() => {
    console.log('Connected to MongoDB with Mongoose');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});