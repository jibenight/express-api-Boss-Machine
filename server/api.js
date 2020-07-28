const express = require('express');
const apiRouter = express.Router();

const minions = require('./minions');
apiRouter.use('', minions);

const ideas = require('./ideas');
apiRouter.use('', ideas);

const meetings = require('./meetings');
apiRouter.use('', meetings);

apiRouter.get('', (req, res) => res.send('Hello API!'));

module.exports = apiRouter;
