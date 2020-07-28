const express = require('express');
const meetings = express.Router();

meetings.get('/meetings', (req, res) => {
  res.send('Hello meetings :)');
});

module.exports = meetings;
