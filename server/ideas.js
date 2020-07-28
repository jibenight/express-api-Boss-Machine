const express = require('express');
const ideas = express.Router();

ideas.get('/ideas', (req, res) => {
  res.send('Hello ideas :)');
});

module.exports = ideas;
