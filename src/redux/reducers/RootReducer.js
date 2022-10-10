import { combineReducers } from "redux";
import {createStore} from 'redux';
import { DatVeReducer } from "./DatVeReducer";

const RootReducer = combineReducers({
    DatVeReducer
})

export const store = createStore(RootReducer)