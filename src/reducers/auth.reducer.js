// @flow
import {handleActions} from 'redux-actions';

import type {TUserState} from "../types/state/TUserState";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "../actions/auth.action";

const initialState: TUserState ={
  user: null,
  authToken: '',
  isLoggedIn: false,
  fetching: false,
  error: '',
};

const handler = {
  [LOGIN_REQUEST]: (state: TUserState, action): TUserState => ({
    ...state,
    fetching: true,
    error: '',
  }),
  [LOGIN_SUCCESS]: (state: TUserState, action): TUserState => ({
    ...state,
    user: action.payload,
    authToken: action.payload.authToken,
    isLoggedIn: true,
    fetching: false,
    error: '',
  }),
  [LOGIN_FAILED]: (state: TUserState, action): TUserState => ({
    ...state,
    isLoggedIn: false,
    fetching: false,
    error: action.payload,
  }),
  [LOGOUT]: (state: TUserState, action): TUserState => ({
    ...initialState
  }),
};

export default handleActions(handler, initialState);