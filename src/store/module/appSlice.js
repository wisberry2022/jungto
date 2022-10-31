import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

// 수정코드
const initialState = {
  collegeList: {},
  magazineList: {},
  trainList: []
}

const getAppList = createAsyncThunk('appSlice/getAppList', async (dataArr) => {
  try {
    let data = await axios.post('/getAppList', {
      userId: dataArr[0]
    }, {
      headers: {
        authorization: dataArr[1]
      }
    })
      .then((result) => {
        console.log('thunk에서 받은 것:', result);
        return result.data;
      })
      .catch((error) => {
        const errorData = error.response.data;
        console.log('thunk에서 받은 것(오류)', errorData);
        if (!errorData.ACCESS_RESULT) {
          console.log('errorData', errorData.ACCESS_DATA);
          if (errorData.ERROR_SET.ERROR_TYPE === 'TOKEN_EXPIRED') {

          }
          return errorData;
        }
      })
    return data;
    // console.log('reducer 실행결과:', data);
  } catch (error) {
    const errorData = {
      ERROR_SET: {
        ERROR_TYPE: 'UNEXPECTED_ERROR',
        ACCESS_RESULT: true,
        ACCESS_DATA: {}
      },
      collegeList: {}, magazineList: {}, trainList: []
    }
    return errorData;
  }
})

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    GETS: (state, action) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAppList.fulfilled, (state, action) => {
      console.log('reducer에서 받은 action.payload:', action.payload);
      const { ERROR_SET, collegeList, magazineList, trainList } = action.payload;
      if (ERROR_SET.ACCESS_RESULT) {
        state.collegeList = collegeList.ACCESS_DATA;
        state.magazineList = magazineList.ACCESS_DATA;
        if (trainList.ACCESS_RESULT) {
          state.trainList = trainList.ACCESS_DATA.map((it, idx) => ({ ...it, 'id': idx + 1 }))
        } else {
          state.trainList = trainList.ACCESS_DATA;
        }
      } else {
        state.collegeList = {};
        state.magazineList = {};
        state.trainList = {};
      }
    })
    builder.addCase(getAppList.rejected, (state, action) => {
      console.log('reducer rejected payload');
      console.log(action.payload);
      return state;
    })
  }
})

export default appSlice.reducer;
export { getAppList };
export const { GETS } = appSlice.actions;