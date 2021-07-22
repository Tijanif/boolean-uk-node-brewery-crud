// Imports
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const BreweryRouter = require('./resources/breweries/routes');
// Initialising server
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/breweries', BreweryRouter);

// Port
const port = 4000;

// Listning to server
app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
