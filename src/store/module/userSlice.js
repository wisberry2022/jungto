import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  dataExist: false,
  collegeList: {},
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
    return error;
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
      const { ERROR_TYPE, ACCESS_RESULT, ACCESS_DATA } = action.payload;
      state.dataExist = ACCESS_RESULT;
      state.collegeList = ACCESS_DATA;
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