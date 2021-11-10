import { takeLatest, call, all, put } from 'redux-saga/effects';
import { login, loginSuccess, loginFailure, logout, logoutSuccess } from 'store/modules/auth/slice';
import { log } from 'common/utils';
import { authenticateAPI, signOut } from 'api/auth';
import { removeItem, setItem } from 'common/storage';
import { LOCAL_STORAGE } from 'common/constants';
import { push } from 'connected-react-router';

function* handleLogin(payload) {
  try {
    const { email, password } = payload;
    const res = yield authenticateAPI(email, password);
    if (res.status === 200) {
      yield put(
        loginSuccess({
          data: res,
        }),
      );
      setItem(LOCAL_STORAGE.TOKEN, res.data.token);
      setItem(LOCAL_STORAGE.USER, JSON.stringify(res.data));
      yield put(push('/semantic'));
    }
  } catch (error) {
    log('handleLogin ERROR', error);
    yield put(
      loginFailure({
        error,
      }),
    );
  }
}

function* handleLoginSaga() {
  yield takeLatest(login, handleLogin);
}

function* handleLogout() {
  try {
    const res = yield signOut();
    if (res.status === 200) {
      yield put(logoutSuccess());
      removeItem(LOCAL_STORAGE.TOKEN);
      removeItem(LOCAL_STORAGE.USER);
      yield put(push('/login'));
    }
  } catch (error) {
    log('handleLogout ERROR', error);
  }
}

function* handleLogoutSaga() {
  yield takeLatest(logout, handleLogout);
}
export function* authMiddleware() {
  yield all([call(handleLoginSaga), call(handleLogoutSaga)]);
}
