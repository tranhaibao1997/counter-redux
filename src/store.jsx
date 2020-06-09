import { createStore } from "redux";
import CountReducer from './CountReducer'

const store = createStore(
  CountReducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store
