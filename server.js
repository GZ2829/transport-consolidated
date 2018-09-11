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
    app.get(/^\/(?!api).*/, (req, res) => { // don't serve react app to api routes
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });


app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/user', userRoutes)

app.use('/api/trucks', truckRoutes)

app.use('/api/trailers', trailerRoutes)

app.use('/api/bids', bidRoutes)

app.use('/api/loads', loadRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Up and Running')
})