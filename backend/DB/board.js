const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://wisberry2022:chvrches409@cluster0.8xydiec.mongodb.net/Jungto?retryWrites=true&w=majority', {
  autoIndex: true, keepAlive: true, keepAliveInitialDelay: 30000,
}
).then(() => (console.log('mongodb board connect!'))).catch((err) => { console.log(err) })

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  email: String,
  password: { type: String, required: true },
  contents: { type: String, required: true },
  date: { type: String, required: true }
})

const boardModel = mongoose.model('Board', boardSchema, "Board");


module.exports = boardModel;