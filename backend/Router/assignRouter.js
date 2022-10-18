const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const user = require('../DB/user');

const { magazineModel } = user();

dotenv.config();

// 월간정토 구독 라우팅
router.post('/assignMagazine', (req, res) => {
  console.log('aM 라우팅', req.body);
  let duplicate = { userId: req.body.userId };
  magazineModel.findOne(duplicate)
    .then((r) => {
      console.log('중복결과:', r);
      if (r === null) {
        console.log('등록하셧습니다!')
        magazineModel.insertMany(req.body)
          .then(() => (
            res.send({
              ERROR_TYPE: '',
              ACCESS_RESULT: true,
            })
          ))
          .catch(() => {
            res.status(400).send({
              ERROR_TYPE: '관리자에게 문의하세요!',
              ACCESS_RESULT: false,
            })
          })
      } else {
        console.log('이미 구독하셨습니다!')
        res.status(400).send({
          ERROR_TYPE: '이미 구독하셨습니다!',
          ACCESS_RESULT: false,
        })
      }
    })

})

module.exports = router;