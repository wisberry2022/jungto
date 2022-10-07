const express = require('express');
const router = express.Router();
const boardModel = require('../DB/board');



router.post('/register', (req, res) => {
  console.log(`req.body:`, req.body);
  boardModel.insertMany(req.body);
  res.send('OK');
})

router.get('/mm_practice', (req, res) => {
  boardModel.find()
    .then((result) => res.send(result));
  // res.send('OK!');
})

module.exports = router;