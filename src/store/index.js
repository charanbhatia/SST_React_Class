import { createStore,applyMiddleware } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import categoriesReducer from "./Categories";


const reducer=combineReducers({
    cart:cartReducer,
    categories:categoriesReducer
})

const store = createStore(reducer,applyMiddleware(thunk));


export default store;