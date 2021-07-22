// Imports
const express = require('express');

// Data
let Breweries = [
  {
    id: 9094,
    obdb_id: 'bnaf-llc-austin',
    name: 'Bnaf, LLC',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Austin',
    state: 'Texas',
    county_province: null,
    postal_code: '78727-7602',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9180,
    obdb_id: 'boulder-beer-co-boulder',
    name: 'Boulder Beer Co',
    brewery_type: 'regional',
    street: '2880 Wilderness Pl',
    address_2: null,
    address_3: null,
    city: 'Boulder',
    state: 'Colorado',
    county_province: null,
    postal_code: '80301-5401',
    country: 'United States',
    longitude: '-105.2480158',
    latitude: '40.026439',
    phone: null,
    website_url: null,
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9754,
    obdb_id: 'clermont-brewing-company-clermont',
    name: 'Clermont Brewing Company',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Clermont',
    state: 'Florida',
    county_province: null,
    postal_code: '34711-2108',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10186,
    obdb_id: 'dimensional-brewing-co-dubuque',
    name: 'Dimensional Brewing Co.',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Dubuque',
    state: 'Iowa',
    county_province: null,
    postal_code: '52001',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: 'http://www.dimensionalbrewing.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10217,
    obdb_id: 'dixie-brewing-co-inc-new-orleans',
    name: 'Dixie Brewing Co Inc.',
    brewery_type: 'contract',
    street: '6221 S Claiborne Ave Ste 101',
    address_2: null,
    address_3: null,
    city: 'New Orleans',
    state: 'Louisiana',
    county_province: null,
    postal_code: '70125-4191',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5048228711',
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10486,
    obdb_id: 'epidemic-ales-concord',
    name: 'Epidemic Ales',
    brewery_type: 'micro',
    street: '150 Mason Circle Stes I&J',
    address_2: null,
    address_3: null,
    city: 'Concord',
    state: 'California',
    county_province: null,
    postal_code: '94520',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '9255668850',
    website_url: 'http://www.epidemicales.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11039,
    obdb_id: 'goose-island-philadelphia-philadelphia',
    name: 'Goose Island Philadelphia',
    brewery_type: 'brewpub',
    street: '1002 Canal St',
    address_2: null,
    address_3: null,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    county_province: null,
    postal_code: '19123',
    country: 'United States',
    longitude: '-75.13506341',
    latitude: '39.9648491',
    phone: null,
    website_url: null,
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11235,
    obdb_id: 'grits-brewing-chamblee',
    name: 'GRITS Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Chamblee',
    state: 'Georgia',
    county_province: null,
    postal_code: '30341-2024',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11767,
    obdb_id: 'ironbark-brewery-jackson',
    name: 'Ironbark Brewery',
    brewery_type: 'micro',
    street: '2610 Kibby Rd',
    address_2: null,
    address_3: null,
    city: 'Jackson',
    state: 'Michigan',
    county_province: null,
    postal_code: '49203-4908',
    country: 'United States',
    longitude: '-84.43762976',
    latitude: '42.2188971',
    phone: '5177487988',
    website_url: null,
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
];
// Innitialising my Brewery Router
const BreweryRouter = express.Router();

// Routes

// Get brewery and by type
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

// Getting a single brewery
BreweryRouter.get('/:id', (req, res) => {
  const breweryId = Number(req.params.id);
  const brewery = Breweries.find((brewery) => brewery.id === breweryId);
  res.json({ brewery });
});
// Create a new brewery
BreweryRouter.post('/', (req, res) => {
  const newBrewery = req.body;
  Breweries = [...Breweries, newBrewery];

  res.json({ Breweries: newBrewery });
});

// Deleting a brewery
BreweryRouter.delete('/:id', (req, res) => {
  const breweryId = Number(req.params.id);
  const foundBrewery = Breweries.find((brewery) => brewery.id === breweryId);
  if (foundBrewery) {
    Breweries.splice(foundBrewery, 1);
    res.json({ foundBrewery });
  } else {
    res.status(400).json('Brewery not Found');
  }
});

module.exports = BreweryRouter;
