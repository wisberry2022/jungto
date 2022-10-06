const express = require('express');
const app = express();
const path = require('path');
const router = require('./Router/router');

app.use(express.static(path.join(__dirname, '../build')));

port = 5050;

app.listen(port, () => {
  console.log(`server listening on ${port}`)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});