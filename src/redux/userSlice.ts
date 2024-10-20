import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: User | null;
}

interface User {
  username: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
