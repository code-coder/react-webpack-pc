import { all, fork } from 'redux-saga/effects';
import globalRoot from './global';

export default function* rootSaga() {
  yield all([fork(globalRoot)]);
}
