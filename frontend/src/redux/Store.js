import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./Slices/authSlice"
import employeeSlice from "./Slices/employeeSlice"
export const Store=configureStore({
    reducer:{
        auth:authSlice,
        employee:employeeSlice,
    }
})