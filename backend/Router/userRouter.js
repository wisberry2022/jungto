const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const user = require('../DB/user');

const { userModel } = user();

dotenv.config();

router.post('/getData', (req, res) => {
  const token = req.headers['authorization'];
  let userId;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(400).send();
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

module.exports = router;