import { all, call } from 'redux-saga/effects';
import { authMiddleware } from 'store/modules/auth/saga';
import { appMiddleware } from 'store/modules/app/saga';

export default function* rootSaga() {
  yield all([call(authMiddleware), call(appMiddleware)]);
}
