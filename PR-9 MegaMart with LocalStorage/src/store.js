import { createStore } from "redux";
import { ProductReducer } from "./Services/Reducer/productReducer";

export const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());