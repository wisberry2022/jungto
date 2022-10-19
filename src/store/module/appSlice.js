import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

// 수정코드
const initialState = {
  collegeList: {},
  magazineList: {}
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
          return errorData;
        }
      })
    return data;
    // console.log('reducer 실행결과:', data);
  } catch (error) {
    console.log('unexpected Error!', error);
    return error;
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
      const { ERROR_SET, collegeList, magazineList } = action.payload;
      console.log('collegeList in reducer', collegeList);
      console.log('magazineList in reducer', magazineList);
      if (ERROR_SET.ACCESS_RESULT) {
        state.collegeList = collegeList.ACCESS_DATA;
        state.magazineList = magazineList.ACCESS_DATA;
      } else {
        state.collegeList = {};
        state.magazineList = {};
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