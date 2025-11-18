import { applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

let store = null;
export default {
  configure: () => {
    const composeEnhancers = 
      (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    
    store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk, logger))
    );
    return store;
  }
};
