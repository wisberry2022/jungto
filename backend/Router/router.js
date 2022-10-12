const express = require('express');
const router = express.Router();
const boardModel = require('../DB/board');

router.get('/mm_practice', (req, res) => {
  boardModel.find()
    .then((result) => res.send(result));
})

router.post('/register', (req, res) => {
  console.log(`req.body:`, req.body);
  boardModel.insertMany(req.body);
  res.send('OK');
})

router.put('/update', (req, res) => {
  console.log('update 요청 받음:', req.body);
  let dataId = { '_id': req.body._id };
  boardModel.updateOne(dataId, req.body)
    .then((result) => (res.send('OK!')));
})

router.delete('/delete', (req, res) => {
  let pwd = { password: req.body.pwd };
  boardModel.deleteOne(pwd).then((result) => (res.send('OK')))
})

module.exports = router;