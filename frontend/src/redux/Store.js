import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./Slices/authSlice"
export const Store=configureStore({
    reducer:{
        auth:authSlice,
    }
})