import { all, fork } from 'redux-saga/effects';

import { users } from './users/actions';

export default function* rootSaga() {
  yield all([fork(users)]);
}
