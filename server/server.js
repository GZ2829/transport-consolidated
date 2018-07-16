const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const morgan = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/taskmanager');

const userRoutes = require('./routes/user')

const truckRoutes = require('./routes/trucks')

const trailerRoutes = require('./routes/trailers')

const bidRoutes = require('./routes/bids')

const loadRoutes = require('./routes/loads')

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/user', userRoutes)

app.use('/trucks', truckRoutes)

app.use('/trailers', trailerRoutes)

app.use('/bids', bidRoutes)

app.use('/loads', loadRoutes)

app.listen(3728, ()=>{
    console.log('Up and Running on port: 3728')
})