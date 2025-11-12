import { applyMiddleware, compose, createStore } from "redux";
import {  ProductReducer } from "./Services/Reducer/productReducer";
import { thunk } from "redux-thunk";

// basic Store
// export const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// advance store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(ProductReducer, composeEnhancers(applyMiddleware(thunk)));