import { createSelector } from '@reduxjs/toolkit';

const getIsLogged = (state) => state.auth.isLogged;
export const isLoggedSelector = createSelector(getIsLogged, (isLogged) => isLogged);

const getUser = (state) => state.auth.user;
export const userSelector = createSelector(getUser, (user) => user);
