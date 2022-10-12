const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userModel = require('../DB/user');

dotenv.config();

// jwt 토큰 생성 함수
const createJWT = (userId, eMail) => {
  const secretKey = process.env.ACCESS_TOKEN_SECRET;
  const token = jwt.sign({
    token_type: 'access',
    userId: userId,
    userMail: eMail,
  },
    secretKey,
    {
      issuer: userId,
      expiresIn: '180m',
      subject: 'Access'
    }
  )
  return token;
}

router.post('/assignMember', async (req, res) => {
  req.body.password = crypto.createHash('sha512').update(req.body.password).digest('base64');
  await userModel.insertMany(req.body);
  res.send('OK')
})

router.post('/loginCheck', (req, res) => {
  let userId = { userId: req.body.userId }
  let password = { password: crypto.createHash('sha512').update(req.body.password).digest('base64') }
  userModel.findOne(userId)
    .then((result) => {
      // 아이디 검사
      if (result === null) {
        // 아이디 불일치 시
        res.status(500).send({
          ACCESS_RESULT: 'DENY',
          ACCESS_TOKEN: 'NONE',
          ERROR_TYPE: 'WRONG_ID',
        });
      } else {
        // 비밀번호 검사
        userModel.findOne(password)
          .then((result) => {
            // 비밀번호 불일치 시
            if (result === null) {
              res.status(500).send({
                ACCESS_RESULT: 'DENY',
                ACCESS_TOKEN: 'NONE',
                ERROR_TYPE: 'WRONG_PWD',
              });
            } else {
              // 비밀번호 일치 시
              // JWT 토큰 생성 후 프론트단으로 전송
              const Token = createJWT(req.body.userId, result.email);
              res.send({
                ACCESS_RESULT: 'OK',
                ACCESS_TOKEN: Token,
              })
            }
          })
      }
    })
    .catch((error) => (res.status(500).send({
      ACCESS_RESULT: 'DENY',
      ACCESS_TOKEN: 'NONE',
      ERROR_TYPE: 'UNEXPECTED_ERROR',
    })))
})

// 토큰 검증 라우팅
router.post('/', (req, res) => {
  const token = req.headers['authorization'];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.send({
        ACCESS_RESULT: 'DENY',
      })
    } else {
      res.send({
        ACCESS_RESULT: 'PERMITTED',
      })
    }
  });
})

module.exports = router;