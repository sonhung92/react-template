import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from 'common/constants';
import { getItem, parseItem } from 'common/storage';
import { log } from 'common/utils';

const initialState = {
  isLogged: !!getItem(LOCAL_STORAGE.TOKEN),
  user: parseItem(LOCAL_STORAGE.USER) || {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login
    login: () => {},
    loginSuccess(state, action) {
      const { data } = action.payload;
      state.isLogged = true;
      state.user = data.data;
    },
    loginFailure() {
      log('loginFailure');
    },
    // log out
    logout: () => {},
    logoutSuccess(state) {
      state.isLogged = false;
      state.user = {};
    },
  },
});

export const {
  // login
  login,
  loginSuccess,
  loginFailure,
  // logout
  logout,
  logoutSuccess,
} = authSlice.actions;

export const authLoading = (builder, startLoading, endLoading) => {
  builder.addCase(login, startLoading);
  builder.addCase(logout, startLoading);

  builder.addCase(loginSuccess, endLoading);
  builder.addCase(loginFailure, endLoading);

  builder.addCase(logoutSuccess, endLoading);
};

export default authSlice.reducer;
