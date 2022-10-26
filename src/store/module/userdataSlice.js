import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const getUserData = createAsyncThunk('userDataSlice/getUserData', async (userState) => {
  try {
    let data = await axios.post('/getData', {}, {
      headers: {
        authorization: userState,
      }
    })
      // .catch((error) => {
      //   const errorData = error.response.data;
      //   console.log(`userData thunk`, errorData)
      //   return errorData.ACCESS_DATA;
      // })
      .then((res) => {
        return res.data;
      })
    return data;
  } catch {
    return {};
  }
})

const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    },
    DELETE: (state, action) => {
      return {};
    }

  },
  extraReducers: (builer) => {
    builer.addCase(getUserData.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    })
    builer.addCase(getUserData.rejected, (state, action) => {
      return state;
    })
  }
})

export default userDataSlice.reducer;
export const { GET, DELETE } = userDataSlice.actions;
export { getUserData };