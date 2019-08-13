const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();
server.use(express.json());

//read cars
server.get('/', (req, res) => {
  db('cars')
    .then(allCars => {
      res.status(201).json(allCars);
    })
    .catch(err => {
      res.status(500).json({ message: 'error finding cars' });
    });
});

//create new car
server.post('/', (req, res) => {
  const newCar = req.body;
  db('cars')
    .insert(newCar, 'id')
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(err => {
      res.status(500).json({ message: 'error adding car to db' });
    });
});

module.exports = server;
