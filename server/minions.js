const express = require('express');
const minions = express.Router();

minions.get('/minions', (req, res) => {
  res.send('Hello Minions :)');
});

module.exports = minions;
