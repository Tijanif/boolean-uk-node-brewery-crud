// Imports
const express = require('express');
const morgan = require('morgan');

// Initialising server
const app = express();

// Middleware
app.use(morgan('dev'));

// Port
const port = 4000;

// Listning to server
app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
