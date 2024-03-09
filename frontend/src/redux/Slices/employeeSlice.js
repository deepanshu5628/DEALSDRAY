import { createSlice } from "@reduxjs/toolkit";

const employeeSlice=createSlice({
    name:"employee",
    initialState:{
        totalemployee:0,
        employeedata:localStorage.getItem("employeedata")? JSON.parse(localStorage.getItem("employeedata")):null,
    },
    reducers:{
        settotalemployee:(state,actions)=>{
            state.totalemployee=actions.payload;
        },
        setemployeedata:(state,actions)=>{
            state.employeedata=actions.payload;
        }
    }

})

export const {settotalemployee,setemployeedata}=employeeSlice.actions;
export default employeeSlice.reducer;