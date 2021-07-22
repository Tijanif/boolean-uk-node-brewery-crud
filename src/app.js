// Imports
const express = require('express');

// Initialising server
const app = express();

// Port
const port = 4000;

// Listning to server
app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
