import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./products/reducers";

const reducer = combineReducers({ products: productsReducer });

const errorMessageLogger = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  if (action.type === "FILTER_FAIL" || action.type === "FAVORITE_FAIL") {
    console.error(action.message);
  }
  return result;
};

export const store = createStore(
  reducer,
  applyMiddleware(thunk, errorMessageLogger)
);
