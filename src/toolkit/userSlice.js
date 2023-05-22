import { createSlice } from "@reduxjs/toolkit";
import { localUserService } from "../services/loginServices/localService";

//rxslice
const initialState = {
  userInfo: localUserService.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserLogin } = userSlice.actions;

export default userSlice.reducer;
