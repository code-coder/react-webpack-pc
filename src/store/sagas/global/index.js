import { all, fork } from 'redux-saga/effects';
import watchUserInfoSaga from './user-info';

export default function* globalRoot() {
  yield all([fork(watchUserInfoSaga)]);
}
