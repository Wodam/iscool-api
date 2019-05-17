'use strict';

const express = require('express');
const router = express.Router();

router.get('/api/', function (req, res) {
  res.send('Hello World!')
})

router.use('/api/question', require('./question'));
router.use('/api/choice', require('./choice'));
router.use('/api/test', require('./test'));
router.use('/api/answer', require('./answer'));

module.exports = router;
