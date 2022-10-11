const express = require('express');
const router = express.Router();
const userModel = require('../DB/user');

router.post('/assignMember', async (req, res) => {
  await userModel.insertMany(req.body);
  res.send('OK')
})

router.post('/loginCheck', (req, res) => {
  console.log(req.body);
  let userId = { userId: req.body.userId }
  let password = { password: req.body.password }
  userModel.findOne(userId)
    .then((result) => {
      if (result === null) {
        res.status(500).send('Wrong ID!')
      } else {
        res.send('OK')
      }
    })
  // .catch((error) => (res.status(500).send('Wrong ID!')))
})

module.exports = router;