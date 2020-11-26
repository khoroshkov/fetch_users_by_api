import { NotificationManager } from 'react-notifications';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api';
import types from '../types';

function* getUsers() {
  try {
    const { status, data } = yield call(api.getUsers);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_USERS_ERROR });
    NotificationManager.error('Success!', 'Title', 4000);
  }
}

function* postUsers({ payload, callback }) {
  try {
    const { status, data } = yield call(api.postUser, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.POST_USER_SUCCESS, payload: data });
    NotificationManager.success('Success!', 'Title', 4000);
    callback();
  } catch (error) {
    yield put({ type: types.POST_USER_ERROR });
    NotificationManager.error('Success!', 'Title', 4000);
  }
}

function* deleteUsers({ payload }) {
  try {
    const { status, data } = yield call(api.deleteUser, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.DELETE_USER_SUCCESS, payload: data });
    NotificationManager.success('Success!', 'Title', 4000);
  } catch (error) {
    yield put({ type: types.DELETE_USER_ERROR });
    NotificationManager.error('Success!', 'Title', 4000);
  }
}

function* putUsers({ payload }) {
  try {
    const { status, data } = yield call(api.putUser, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.PUT_USER_SUCCESS, payload: data });
    NotificationManager.success('Success!', 'Title', 4000);
  } catch (error) {
    yield put({ type: types.PUT_USER_ERROR });
    NotificationManager.error('Success!', 'Title', 4000);
  }
}

export function* users() {
  yield all([
    takeLatest(types.GET_USERS_START, getUsers),
    takeLatest(types.POST_USER_START, postUsers),
    takeLatest(types.DELETE_USER_START, deleteUsers),
    takeLatest(types.PUT_USER_START, putUsers),
  ]);
}
