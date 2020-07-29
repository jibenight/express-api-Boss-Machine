const express = require('express');
const minions = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require('./db');

minions.get('/minions', (req, res) => {
  const showMinions = getAllFromDatabase('minions');
  res.send(showMinions);
});

module.exports = minions;
