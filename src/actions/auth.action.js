// @flow
import {createAction} from 'redux-actions';

export const LOGIN_REQUEST = '[AUTH] LOGIN_REQUEST';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAILED = '[AUTH] LOGIN_FAILED';
export const LOGOUT = '[AUTH] LOGOUT';

export const loginRequest = createAction(LOGIN_REQUEST );
export const loginSuccess = createAction(LOGIN_SUCCESS );
export const loginFailed = createAction(LOGIN_FAILED );
export const logout = createAction(LOGOUT);