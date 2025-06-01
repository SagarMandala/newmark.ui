import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  propertyRecords: [],
};

export const PropertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      debugger;
      state.propertyRecords = action.payload;
    },
  },
});

export const { setProperties } = PropertiesSlice.actions;
export default PropertiesSlice.reducer;
