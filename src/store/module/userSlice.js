import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  "_id": {
    "$oid": "63464cab8f17a329a55603d1"
  },
  "userId": "akutsuhrk512",
  "password": "K+DLgytGGBqmBWUnoyelpRC1pYam9YJfWSPfGN3hzYQA9vjoka99mEnt4LJi8O95ZyWZFgXY1sA+ipMlBKgb0g==",
  "email": "wisberry2022@gmail.com",
  "address": "부산광역시 서구 서대신동 3가",
  "phone": "010-5287-1112",
  "assignDate": "2022-10-12",
  "__v": 0
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    }
  }
})

export default userSlice.reducer;