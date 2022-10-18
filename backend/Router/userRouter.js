const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const user = require('../DB/user');

const { userModel, collegeModel } = user();

dotenv.config();

// 입학 신청 시 이미 입력된 정보 전송
router.post('/getData', (req, res) => {
  const token = req.headers['authorization'];
  let userId;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(400).send({
        ERROR_TYPE: 'TOKEN_EXPIRED',
        ACCESS_DATA: {},
      });
    } else {
      userId = decoded.userId;
      console.log('검증 성공!');
      userModel.findOne({ userId: userId })
        .then((result) => {
          res.send({
            userId: result.userId,
            email: result.email,
            address: result.address,
            phone: result.phone,
          })
        })
    }
  });
})

// 대학신청리스트 확인 쿼리
router.post('/getCollegeList', (req, res) => {
  const token = req.headers['authorization'];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(400).send({
        ERROR_TYPE: 'TOKEN_EXPIRED',
        ACCESS_RESULT: false,
        ACCESS_DATA: {}
      })
    } else {
      console.log(req.body);
      collegeModel.findOne(req.body)
        .then((result) => {
          // 일치하는 리스트가 없을 경우
          if (result === null) {
            res.status(400).send({
              ERROR_TYPE: 'NODATA',
              ACCESS_RESULT: false,
              ACCESS_DATA: {},
            })
            // 일치하는 리스트가 있을 경우
          } else {
            console.log('일치하는 데이터가 있어요! 대박!', result)
            res.send({
              ERROR_TYPE: '',
              ACCESS_RESULT: true,
              ACCESS_DATA: result,
            })
          }
        });
    }
  })
})

module.exports = router;