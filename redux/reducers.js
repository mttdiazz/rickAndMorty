import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
};

const reducers = createSlice({
  name: "application",
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
  },
});


export const { setModalVisible , setSelectedGender } = reducers.actions;
export default reducers.reducer;