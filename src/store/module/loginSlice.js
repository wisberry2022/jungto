import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//localhost 확인용
// const initialState = { logState: true, userId: 'keiko2015' };

// 배포용
const initialState = { logState: false, userId: '' };

// 배포용
const verifyData = createAsyncThunk('loginSlice/VERIFY', async (userState) => {
  let result = await axios.post('/verify', {}, {
    headers: {
      Authorization: userState,
    }
  })
  if (result.data.ACCESS_RESULT) {
    return Object.values(result.data);
  } else {
    return Object.apply(result.data);
  }
})

// localhost 확인용
// const verifyData = createAsyncThunk('loginSlice/VERIFY', async (userState) => {
//   try {
//     let result = await axios.post('/verify', {}, {
//       headers: {
//         Authorization: userState,
//       }
//     })
//     if (result.data.ACCESS_RESULT) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   catch {
//     return [true, 'keiko2015'];
//   }
// })

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
      console.log('pending:', action.payload);
      return state;
    })
    builder.addCase(verifyData.fulfilled, (state, action) => {
      console.log('fulfilled:', action.payload);
      state.logState = action.payload[0]
      state.userId = action.payload[1]
    })
    builder.addCase(verifyData.rejected, (state, action) => {
      console.log('rejected:', action.payload);
      // locahost:3000 확인 용
      // state.logState = action.payload[0];
      // state.userId = action.payload[1];
      // 배포용 코드
      return state;
    })
  }
})

export const { VERIFY, CLEAR } = loginSlice.actions;
export { verifyData };
export default loginSlice.reducer;