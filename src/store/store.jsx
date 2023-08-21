import {configureStore} from "@reduxjs/toolkit";
import {chatReducer} from "../slices/slice"

export const store = configureStore({
    reducer:{
        chat:chatReducer
    }
})