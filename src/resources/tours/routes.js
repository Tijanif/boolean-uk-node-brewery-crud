// Imports
const express = require('express');

// Data
let Tours = [
  {
    id: 1,
    breweryId: 9242,
    numberPeople: 2,
    date: '03/12/2021',
  },
  {
    id: 2,
    breweryId: 9242,
    numberPeople: 5,
    date: '13/12/2021',
  },
  {
    id: 3,
    breweryId: 9242,
    numberPeople: 4,
    date: '20/12/2021',
  },
];

// Innitialising my Brewery Router
const BreweryRouter = express.Router();
BreweryRouter.get('/', (req, res) => {
  const type = req.query.brewery_type;

  if (type) {
    const breweryToShow = Breweries.filter(
      (brewery) => brewery.brewery_type === type
    );
    const response = breweryToShow.length
      ? breweryToShow
      : `Can't find a breweries with that type.`;
    res.json({ breweries: response });
  } else {
    res.json({ breweries: Breweries, timestamp: Date.now() });
  }
});
