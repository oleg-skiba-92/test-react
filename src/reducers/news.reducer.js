// @flow
import {handleActions} from 'redux-actions';

import type {TNewsState} from "../types/state/TNewsState";
import {
  GET_NEWS_FAILED,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_BY_ID_REQUEST,
  GET_NEWS_BY_ID_SUCCESS,
  GET_NEWS_BY_ID_FAILED
} from "../actions/news.action";

const initialState: TNewsState = {
  currentNews: null,
  news: [],
  fetching: false,
  error: '',
};

const handler = {
  [GET_NEWS_REQUEST]: (state: TNewsState, action): TNewsState => ({
    ...state,
    fetching: true,
    error: '',
  }),
  [GET_NEWS_SUCCESS]: (state: TNewsState, action): TNewsState => ({
    ...state,
    news: action.payload,
    fetching: false,
    error: '',
  }),
  [GET_NEWS_FAILED]: (state: TNewsState, action): TNewsState => ({
    ...state,
    fetching: false,
    error: action.payload,
  }),

  [GET_NEWS_BY_ID_REQUEST]: (state: TNewsState, action): TNewsState => ({
    ...state,
    fetching: true,
    error: '',
  }),
  [GET_NEWS_BY_ID_SUCCESS]: (state: TNewsState, action): TNewsState => ({
    ...state,
    currentNews: action.payload,
    fetching: false,
    error: '',
  }),
  [GET_NEWS_BY_ID_FAILED]: (state: TNewsState, action): TNewsState => ({
    ...state,
    fetching: false,
    error: action.payload,
  })
};

export const newsReducer = handleActions(handler, initialState);