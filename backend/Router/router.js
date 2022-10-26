const express = require('express');
const router = express.Router();
const boardModel = require('../DB/board');

router.get('/mm_practice', (req, res) => {
  boardModel.find()
    .then((result) => res.send(result));
})

router.post('/register', (req, res) => {
  boardModel.insertMany(req.body);
  res.send('OK');
})

router.put('/update', (req, res) => {
  let dataId = { '_id': req.body._id };
  boardModel.updateOne(dataId, req.body)
    .then((result) => (res.send('OK!')));
})

router.delete('/delete', (req, res) => {
  let data = { '_id': req.body._id, 'password': req.body.pwd };
  boardModel.deleteOne(data).then((result) => (res.send('OK!')))
})

module.exports = router;