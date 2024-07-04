import { combineReducers, legacy_createStore as createStore } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";

const reducers = {
    count: countReducer,
    login: loginReducer,
}

const allReducer = combineReducers(reducers);

export{allReducer};