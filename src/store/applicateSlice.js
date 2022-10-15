import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: '',
  name: '',
  email: '',
  address: '',
  phone: '',
  date: '',
};

const applicationSlice = createSlice({
  name: 'applicationSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      const { name, value } = action.payload
      state[name] = value;
    }
  }
})

export default applicationSlice.reducer;
export const { GET } = applicationSlice.actions;