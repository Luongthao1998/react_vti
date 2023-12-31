import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // ten cua slice reducer
  name: "counter",
  // gias tri state ban dau
  initialState: {
    value: 1,
    nameContact: "supper here",
  },
  // phuong thuc tinh toan reducer
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    updateText: (state, action) => {
      state.nameContact = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateText } =
  counterSlice.actions;

export default counterSlice.reducer;
