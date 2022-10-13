import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { logState: false };

const verifyData = createAsyncThunk('loginSlice/VERIFY', async (userState) => {
  let result = await axios.post('/verify', {}, {
    headers: {
      Authorization: userState,
    }
  })
  if (result.data.ACCESS_RESULT === 'PERMITTED') {
    return true;
  } else {
    return false;
  }
})

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    VERIFY: (state, action) => {
      state.logState = true;
    },
    CLEAR: (state, action) => {
      state.logState = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(verifyData.pending, (state, action) => {
      console.log('pending:', action.payload);
      return state;
    })
    builder.addCase(verifyData.fulfilled, (state, action) => {
      console.log('fulfilled:', action.payload);
      state.logState = action.payload;
    })
    builder.addCase(verifyData.rejected, (state, action) => {
      console.log('rejected:', action.payload);
      return state;
    })
  }
})

export const { VERIFY, CLEAR } = loginSlice.actions;
export { verifyData };
export default loginSlice.reducer;