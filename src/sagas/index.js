// @flow
import { all, call } from 'redux-saga/effects';

import {watchGetNews, watchGetNewsById} from "./news.saga";
import {watchLogin} from "./auth.saga";

export function* rootSaga(): Generator<any, any, any> {
  yield all([
    call(watchGetNews),
    call(watchGetNewsById),
    call(watchLogin),
  ]);
}