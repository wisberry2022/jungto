const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://wisberry2022:chvrches409@cluster0.8xydiec.mongodb.net/Jungto?retryWrites=true&w=majority', {
  autoIndex: true, keepAlive: true, keepAliveInitialDelay: 30000,
}
).then(() => (console.log('mongodb user-set connect!'))).catch((err) => { console.log(err) })

// 회원정보 콜렉션
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  assignDate: { type: String, required: true },
})

// 정토불교대학 신청정보 콜렉션
const collegeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: String,
  address: { type: String, required: true },
  phone: { type: String, required: true },
  desiredDate: { type: Date, required: true },
  assignDate: { type: String, required: true },
})

// 월간정토 신청정보 콜렉션
const magazineSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  price: { type: Number, required: true },
  phone: { type: String, required: true },
  subPhone: { type: String, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  subName: { type: String, required: true },
  startYear: { type: Number, required: true },
  startMonth: { type: Number, required: true },
  motivation: String,
  duringYear: { type: Number, required: true },
  account: { type: String, required: true },
})

const userModel = mongoose.model('UserSet', userSchema, "UserSet");
const collegeModel = mongoose.model('College', collegeSchema, "College");
const magazineModel = mongoose.model('Magazine', magazineSchema, 'Magazine');

module.exports = function () {
  return ({
    collegeModel,
    userModel,
    magazineModel,
  })
}