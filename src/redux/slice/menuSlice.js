import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuData from "../../data/menuData";

export const getMenuData = createAsyncThunk("menu/getMenuData", async () => {
  const response = menuData;
  return response;
});

export const menuSlice = createSlice({
  name: "menu",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getMenuData.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { getMenu } = menuSlice.actions;

export default menuSlice.reducer;
