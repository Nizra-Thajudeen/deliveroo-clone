import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuData from "../../data/menuData";

export const getMenuData = createAsyncThunk("menu/getMenuData", async () => {
  const response = menuData;
  return response;
});

export const menuSlice = createSlice({
  name: "menu",
  initialState: { menuData: [], selectedMenuData: { name: "", image: "" } },
  reducers: {
    setSelectedMenu: (state, action) => {
      state.selectedMenuData = action.payload;
      return state;
    },
  },
  extraReducers: {
    [getMenuData.fulfilled]: (state, action) => {
      state.menuData = action.payload;
      return state;
    },
  },
});

export const { getMenu, setSelectedMenu } = menuSlice.actions;

export default menuSlice.reducer;
