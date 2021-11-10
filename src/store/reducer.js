import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import authReducer from 'store/modules/auth/slice';
import appReducer from 'store/modules/app/slice';

export const browserHistory = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    app: appReducer,
  });

export default rootReducer(browserHistory);
