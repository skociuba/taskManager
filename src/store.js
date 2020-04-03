import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import logger from 'redux-logger';

//const initialState = {};

const middleware = [thunk, logger];
const persistedState = loadState();
const store = createStore(
  rootReducer,
  //initialState, używałem gdy nie kożystałem z local storage
  persistedState,
  compose(applyMiddleware(...middleware))
);
store.subscribe(
  throttle(() => {
    saveState({
      titles: store.getState().titles
    });
  }, 1000)
);
window.store = store; //display store in console

export default store;
