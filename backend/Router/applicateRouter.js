const express = require('express');
const router = express.Router();
const user = require('../DB/user');

const { collegeModel, userModel } = user();


router.post('/collegeEntry', (req, res) => {
  // 신청 내역 DB 저장 로직
  let duplicated = { 'userId': req.body.userId };

  collegeModel.findOne(duplicated)
    .then((result) => {
      if (result === null) {
        collegeModel.insertMany(req.body)
          .then(() => (
            res.send({
              'RESULT': 'SUCCESS',
            })
          ))
      } else {
        res.send({
          'RESULT': 'ALREADY_ASSIGN',
        })
      }
    })
})


module.exports = router;

