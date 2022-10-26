import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = { logState: false, userId: '' };

const verifyData = createAsyncThunk('loginSlice/VERIFY', async (userState) => {
  let result = await axios.post('/verify', {}, {
    headers: {
      Authorization: userState,
    }
  })
  if (result.data.ACCESS_RESULT) {
    return Object.values(result.data);
  } else {
    return Object.values(result.data);
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
      state.userId = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(verifyData.pending, (state, action) => {
      return state;
    })
    builder.addCase(verifyData.fulfilled, (state, action) => {
      state.logState = action.payload[0]
      state.userId = action.payload[1]
    })
    builder.addCase(verifyData.rejected, (state, action) => {
      return state;
    })
  }
})

export const { VERIFY, CLEAR } = loginSlice.actions;
export { verifyData };
export default loginSlice.reducer;