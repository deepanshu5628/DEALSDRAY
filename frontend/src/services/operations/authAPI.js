import { apiconnector } from "../apiconnector";
import {admin} from "../apis";
import {toast } from 'react-toastify';
import {setLoading,setToken,setusername} from "../../redux/Slices/authSlice";

// -----------------------------login-------------------------------------------------
export const login=(userName,password,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true));
        let res;
        try {
             res=await apiconnector("POST",admin.LOGIN_API,{userName,password});
            if(res.success){
                let token=res.token;
                let signupData=res.userdetails;
                dispatch(setToken(token));
                dispatch(setusername(signupData));
                localStorage.setItem("token",JSON.stringify(token));
                localStorage.setItem("username",JSON.stringify(signupData));  
            toast.success(res.message);
            navigate("/dashboard");
        }
        if(!res.success){
            toast.error(res.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
    dispatch(setLoading(false));
}
}

// ------------------------------------Logout-------------------------------------------------
export const logout =(navigate)=>{
    return (dispatch)=>{
        dispatch(setLoading(true));
        dispatch(setToken(null));
        dispatch(setusername(null));
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        toast.success("Logged Out")
        navigate("/");
        dispatch(setLoading(false));
    }
}

// ---------