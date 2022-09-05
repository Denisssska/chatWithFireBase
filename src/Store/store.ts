import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";

export type StateAppType = ReturnType<typeof reducersBox>;
const reducersBox = combineReducers({
    user: userSlice
})
const store = configureStore({
    reducer: reducersBox,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppDispatch = typeof store.dispatch;

export default store;
