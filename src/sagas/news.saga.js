// @flow
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  GET_NEWS_REQUEST,
  GET_NEWS_BY_ID_REQUEST,
  getNewsSuccess,
  getNewsFailed,
  getNewsByIdSuccess,
  getNewsByIdFailed,
} from "../actions/news.action";

import * as api from '../api/news.api'

function* getNews() {
  try {
    let data = yield call(api.getNews);
    yield put(getNewsSuccess(data))
  } catch (e) {
    yield put(getNewsFailed(e))
  }
}

function* getNewsById(action: Object) {
  try {
    let data = yield call(api.getNewsById, action.payload);
    yield put(getNewsByIdSuccess(data))
  } catch (e) {
    yield put(getNewsByIdFailed(e))
  }
}

export function* watchGetNews(): Generator<any, any, any> {
  yield takeLatest(GET_NEWS_REQUEST, getNews)
}

export function* watchGetNewsById(): Generator<any, any, any> {
  yield takeLatest(GET_NEWS_BY_ID_REQUEST, getNewsById)
}