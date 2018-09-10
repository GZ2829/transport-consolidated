const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const morgan = require('morgan');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taskmanager');

const userRoutes = require('./routes/user')

require("dotenv").config()

const truckRoutes = require('./routes/trucks')

const trailerRoutes = require('./routes/trailers')

const bidRoutes = require('./routes/bids')

const loadRoutes = require('./routes/loads')

// ... other imports
const path = require("path")

// ... other app.use middleware setups
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
});

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/user', userRoutes)

app.use('/trucks', truckRoutes)

app.use('/trailers', trailerRoutes)

app.use('/bids', bidRoutes)

app.use('/loads', loadRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Up and Running')
})