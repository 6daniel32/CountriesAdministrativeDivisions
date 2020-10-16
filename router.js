const countryController = require('./controllers/countryController');
const express = require('express');
const router = express.Router();

router.get('/countryStates', countryController.retrieveCountryStates);

router.get('/countryAvailableDivisions', countryController.retrieveCountryDivisions);

module.exports = router;