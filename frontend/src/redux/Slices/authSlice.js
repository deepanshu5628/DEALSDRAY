import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
        loading:false,
        username:localStorage.getItem("username")?JSON.parse(localStorage.getItem("username")):null,
    },
    reducers:{
        setToken:(state,actions)=>{
            state.token=actions.payload;
        },
        setLoading:(state,actions)=>{
            state.loading=actions.payload;
        },
        setusername:(state,actions)=>{
            state.username=actions.payload;
        }

    }
})

export const {setToken,setLoading,setusername}=authSlice.actions;
export default authSlice.reducer;