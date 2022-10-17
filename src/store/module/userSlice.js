import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  dataExist: false,
  collegeList: [],
}

const getCollegeList = createAsyncThunk('userSlice/getCollegeList', async (dataArr) => {
  try {
    let data = await axios.post('/getCollegeList', {
      userId: dataArr[0]
    }, {
      headers: {
        authorization: dataArr[1]
      }
    })
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        const errorData = error.response.data;
        console.log('errorData', errorData);
        if (!errorData.ACCESS_RESULT) {
          console.log('errorData', errorData.ACCESS_DATA);
          return errorData;
        }
      })
    return data;
    // console.log('reducer 실행결과:', data);
  } catch (error) {
    console.log('unexpected Error!', error);
    return {
      "ERROR_TYPE": "",
      "ACCESS_RESULT": true,
      "ACCESS_DATA": {
        "_id": "634d14e71250b3be32797f63",
        "userId": "keiko2015",
        "name": "왕인서",
        "email": "ground444@naver.com",
        "address": "부산광역시",
        "phone": "010-5287-1112",
        "desiredDate": "2022-10-29T00:00:00.000Z",
        "assignDate": "2022-10-17",
        "__v": 0
      }
    };
  }
})

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    GETS: (state, action) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCollegeList.fulfilled, (state, action) => {
      console.log('reducer payload', action.payload);
      const { ERROR_TYPE, ACCESS_RESULT, ACCESS_DATA } = action.payload;
      console.log('reducer payalod-ACCESS_DATA', ACCESS_DATA);
      state.dataExist = ACCESS_RESULT;
      state.collegeList.push(ACCESS_DATA);
    })
    builder.addCase(getCollegeList.rejected, (state, action) => {
      console.log('reducer rejected payload');
      console.log(action.payload);
      return state;
    })
  }
})

export default userSlice.reducer;
export { getCollegeList };
export const { GETS } = userSlice.actions;