import {configureStore} from "@reduxjs/toolkit";
import authLoginReducer from "./authLoginslice.js";
const store = configureStore({
    reducer:{
        login: authLoginReducer
    }
})

export default store;