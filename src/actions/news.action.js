// @flow
import {createAction} from 'redux-actions';

export const GET_NEWS_REQUEST = '[NEWS] GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = '[NEWS] GET_NEWS_SUCCESS';
export const GET_NEWS_FAILED = '[NEWS] GET_NEWS_FAILED';

export const GET_NEWS_BY_ID_REQUEST = '[NEWS] GET_NEWS_BY_ID_REQUEST ';
export const GET_NEWS_BY_ID_SUCCESS = '[NEWS] GET_NEWS_BY_ID_SUCCESS ';
export const GET_NEWS_BY_ID_FAILED = '[NEWS] GET_NEWS_BY_ID_FAILED ';


export const getNewsRequest = createAction(GET_NEWS_REQUEST);
export const getNewsSuccess = createAction(GET_NEWS_SUCCESS);
export const getNewsFailed = createAction(GET_NEWS_FAILED);

export const getNewsByIdRequest = createAction(GET_NEWS_BY_ID_REQUEST);
export const getNewsByIdSuccess = createAction(GET_NEWS_BY_ID_SUCCESS);
export const getNewsByIdFailed = createAction(GET_NEWS_BY_ID_FAILED);