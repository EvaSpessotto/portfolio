const express = require('express');
const router = express.Router();
const db = require('../sql/config');

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router;
