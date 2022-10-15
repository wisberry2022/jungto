const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./Router/router');
const logRouter = require('./Router/logRouter');
const applicateRouter = require('./Router/applicateRouter');
const userRouter = require('./Router/userRouter');

app.use(express.static(path.join(__dirname, '../build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Board 관련 라우팅
app.get('/mm_practice', router);
app.post('/register', router);
app.put('/update', router);
app.delete('/delete', router);

// 로그인 관련 라우팅
app.post('/assignMember', logRouter);
app.post('/loginCheck', logRouter);
app.post('/verify', logRouter);


// 정토불교대학 입학신청 라우팅
app.post('/collegeEntry', applicateRouter);

// 유저 정보 관련 라우팅
app.post('/getData', userRouter);

port = 5050;
app.listen(process.env.PORT || port, () => {
  console.log(`server listening on ${port}`)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});