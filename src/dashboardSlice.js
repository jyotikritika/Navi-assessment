import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    listCount: 0,
    list: []
  },
  reducers: {
    addList: (state, action) => {
      console.log(action.payload);
      state.list.push(action.payload);
      state.listCount += 1;
    },
    addCard: (state) => {}
  }
});

export const { addList, addCard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
