const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const user = require('../DB/user');

const { magazineModel, trainModel } = user();
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

router.post('/entryTrain', (req, res) => {
  const token = req.headers['authorization'];
  const secretKey = process.env.ACCESS_TOKEN_SECRET;
  const duplicate = { 'trainType': req.body.trainType, 'userId': req.body.userId };

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(400).send({
        ERROR_TYPE: 'TOKEN_EXPIRED',
        ACCESS_RESULT: false,
        ERROR_MESSAGE: '로그인 후 시도해주세요!'
      })
    } else {
      trainModel.findOne(duplicate)
        .then((result) => {
          if (result === null) {
            console.log(`중복없음`, duplicate)
            trainModel.insertMany(req.body).then(() => (res.status(200).send({
              ERROR_TYPE: '',
              ACCESS_RESULT: true,
              ERROR_MESSAGE: ''
            })))
          } else {
            console.log(`중복있음`, duplicate)
            res.status(400).send({
              ERROR_TYPE: 'ALREADY_ENTRIED',
              ACCESS_RESULT: false,
              ERROR_MESSAGE: '이미 등록하셨습니다!'
            })
          }
        })
    }
  })
})

module.exports = router;