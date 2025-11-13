import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";
import { AuthReducer } from "./authenticationReducer";

export const rootReducer=combineReducers({
    ProductReducer,
    AuthReducer
})