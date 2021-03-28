const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


// Import Routes
const postsRoute = require('./routes/posts');


// Middlewares (functions that execute when route this accessed)
app.use('/posts', postsRoute);


// Routes 
app.get('/', (req, res) => {
    res.send('we are home');
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to DB')
    });


// Start listening on port 3000
app.listen(3000);