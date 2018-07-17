// @flow
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailed,
} from "../actions/auth.action";
import * as api from "../api/auth.api";

function* login(action: Object) {
  try {
    let data = yield call(api.login, action.payload);

    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFailed(e));
  }
}

export function* watchLogin(): Generator<any, any, any> {
  yield takeLatest(LOGIN_REQUEST, login)
}