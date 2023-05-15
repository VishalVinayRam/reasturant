const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restuarant')

router.post('/restaurants', (req, res) => {
    try
    {
    const {
      name,
      contactName,
      pincode,
      location,
      website,
      phoneNumber,
      averageDailyTransactions,
    } = req.body;
  
    const newRestaurant = new Restaurant({
      name,
      contactName,
      pincode,
      location,
      website,
      phoneNumber,
      averageDailyTransactions,
    });
  
    newRestaurant
      .save()
      .then(() => {
        res.status(201).json({ message: 'Restaurant added successfully' });
      })
      .catch((err) => {
        console.error('Failed to add restaurant', err);
        res.status(500).json({ message: 'Failed to add restaurant' });
      });
    }catch(err)
    {
      console.log(err);
    }
  });
  
  module.exports  = router;