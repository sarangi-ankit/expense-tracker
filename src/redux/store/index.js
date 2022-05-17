import { combineReducers, createStore } from "redux";
import { ExpenseReducer } from "../reducers/ExpenseReducer";


const reducer=combineReducers({
    expense:ExpenseReducer,
})

const initialState={}
export const store=createStore(reducer,initialState)