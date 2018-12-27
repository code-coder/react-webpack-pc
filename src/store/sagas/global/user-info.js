import { put, takeLatest } from 'redux-saga/effects';
import { getUserInfo, updateUserInfo } from '../../../api/api';

import {
  actionTypes,
  getUserInfoSuccess,
  getUserInfoFailed,
  updateUserInfoSuccess,
  updateUserInfoFailed
} from '../../actions/global/user-info';

function* userInfoSaga(action) {
  try {
    const { isServer, params } = (action && action.payload) || {};
    const { success, data } = yield getUserInfo(params, isServer);
    if (success) {
      yield put(getUserInfoSuccess(data));
    }
  } catch (err) {
    yield put(getUserInfoFailed(err));
  }
}

function* updateUserInfoSaga(action) {
  try {
    const { isServer, params, callback } = (action && action.payload) || {};
    const { success } = yield updateUserInfo(params, isServer);
    if (success) {
      yield put(updateUserInfoSuccess({ ...params }));
      callback && callback();
    }
  } catch (err) {
    yield put(updateUserInfoFailed(err));
  }
}

export default function* watchUserInfoSaga() {
  yield takeLatest(actionTypes.GET_USER_INFO_START, userInfoSaga);
  yield takeLatest(actionTypes.UPDATE_USER_INFO_START, updateUserInfoSaga);
}
