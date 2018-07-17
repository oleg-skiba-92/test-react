import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import {reducers} from "./reducers";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";

function configureStore() {
  let sagaMiddleware = createSagaMiddleware();
  let store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = configureStore();
