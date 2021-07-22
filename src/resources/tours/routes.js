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

// Innitialising my Tours Router
const ToursRouter = express.Router();

// Getting tours by date or all tours
ToursRouter.get('/', (req, res) => {
  const date = req.query.date;

  if (date) {
    const toursToShow = Tours.filter((tour) => tour.date === date);
    const response = toursToShow.length
      ? toursToShow
      : `Can't find a Tours with that date.`;
    res.json({ Tours: response });
  } else {
    res.json({ Tours: Tours, timestamp: Date.now() });
  }
});

// Getting a single Tour
ToursRouter.get('/:id', (req, res) => {
  const TourId = Number(req.params.id);
  const tourToShow = Tours.find((tour) => tour.id === TourId);

  res.json({ tourToShow });
});

module.exports = ToursRouter;
