const express = require('express');
const router = express.Router();
const boardModel = require('../DB/board');

router.get('/mm_practice', (req, res) => {
  boardModel.find()
    .then((result) => res.send(result));
})

router.post('/register', async (req, res) => {
  console.log(`req.body:`, req.body);
  await boardModel.insertMany(req.body);
  res.send('OK');
})

router.put('/update', async (req, res) => {
  console.log('update 요청 받음:', req.body);
  let dataId = { '_id': req.body._id };
  await boardModel.updateOne(dataId, req.body)
    .then((result) => (res.send('OK!')));
})

router.delete('/delete', async (req, res) => {
  let pwd = { password: req.body.pwd };
  console.log('삭제!');
  await boardModel.deleteOne(pwd).then((result) => (res.send('OK')))
})

module.exports = router;