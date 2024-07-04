import { combineReducers, legacy_createStore as createStore } from "redux";
import { allReducer } from "../reducer/rootReducers";

export const store = createStore(allReducer)


