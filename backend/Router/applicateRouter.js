const express = require('express');
const router = express.Router();
const collegeModel = require('../DB/user');
const userModel = require('../DB/user');

router.post('/collegeEntry', (req, res) => {
  // 신청 내역 DB 저장 로직
  console.log(req.body);
  res.send('OK!')
})


module.exports = router;

