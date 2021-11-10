import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getConfigs, getConfigsSuccess, getConfigsFailure } from 'store/modules/app/slice';
import { log } from 'common/utils';
import { getConfigsAPI } from 'api/app';

function* handleGetConfigs() {
  try {
    const res = yield getConfigsAPI();
    if (res.status === 200) {
      yield put(
        getConfigsSuccess({
          configs: res.data,
        }),
      );
    }
  } catch (error) {
    log('handleGetConfigs ERROR', error);
    yield put(
      getConfigsFailure({
        error,
      }),
    );
  }
}

function* handleGetConfigsSaga() {
  yield takeLatest(getConfigs, handleGetConfigs);
}

export function* appMiddleware() {
  yield all([call(handleGetConfigsSaga)]);
}
