const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const user = require('../DB/user');

const { userModel, collegeModel, magazineModel, trainModel } = user();

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
router.post('/getAppList', (req, res) => {
  const token = req.headers['authorization'];
  let result_data = {
    ERROR_SET: {
      ERROR_TYPE: '',
      ACCESS_RESULT: true,
      ACCESS_DATA: {}
    },
    collegeList: {}, magazineList: {}, trainList: {}
  };
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      result_data.ERROR_SET = {
        ERROR_TYPE: 'TOKEN_EXPIRED',
        ACCESS_RESULT: false,
        ACCESS_DATA: {},
      };
      res.status(400).send(result_data)
    } else {
      await collegeModel.findOne(req.body)
        .then((result) => {
          // 일치하는 리스트가 없을 경우
          if (result === null) {
            result_data.collegeList = {
              ERROR_TYPE: 'NODATA',
              ACCESS_RESULT: false,
              ACCESS_DATA: {},
            }
            // 일치하는 리스트가 있을 경우
          } else {
            result_data.collegeList = {
              ERROR_TYPE: '',
              ACCESS_RESULT: true,
              ACCESS_DATA: result,
            }
          }
        });
      await magazineModel.findOne(req.body)
        .then((result) => {
          if (result === null) {
            // 일치하는 리스트가 없을 경우
            result_data.magazineList = {
              ERROR_TYPE: 'NODATA',
              ACCESS_RESULT: false,
              ACCESS_DATA: {},
            }
          } else {
            // 일치하는 리스트가 있을 경우
            result_data.magazineList = {
              ERROR_TYPE: '',
              ACCESS_RESULT: true,
              ACCESS_DATA: result,
            }
          }
        })
      await trainModel.find(req.body)
        .then((result) => {
          if (result === null) {
            // 일치하는 리스트가 없을 경우
            result_data.trainList = {
              ERROR_TYPE: 'NODATA',
              ACCESS_RESULT: false,
              ACCESS_DATA: []
            }
          } else {
            // 일치하는 리스트가 있을 경우
            result_data.trainList = {
              ERROR_TYPE: '',
              ACCESS_RESULT: true,
              ACCESS_DATA: result
            }
          }
        })
      res.send(result_data);
    }
  })
})

module.exports = router;