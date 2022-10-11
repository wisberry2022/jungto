const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://wisberry2022:chvrches409@cluster0.8xydiec.mongodb.net/Jungto?retryWrites=true&w=majority', {
  autoIndex: true, keepAlive: true, keepAliveInitialDelay: 30000,
}
).then(() => (console.log('mongodb user-set connect!'))).catch((err) => { console.log(err) })

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  assignDate: { type: String, required: true },
})

const userModel = mongoose.model('UserSet', userSchema, "UserSet");

module.exports = userModel;