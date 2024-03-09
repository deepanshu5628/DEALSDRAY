import { apiconnector ,axiosapiconnector} from "../apiconnector";
import {admin} from "../apis";
import { employee } from "../apis";
import {toast } from 'react-toastify';
import {setLoading,setToken,setusername} from "../../redux/Slices/authSlice";
import {useDispatch, useSelector} from "react-redux"
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

// ------------------------------------create employee---------------------------------
export const createemployee=(information,token,navigate)=>{
    return async (dispatch)=>{
        dispatch(setLoading(true));
            let res;
            try {
                res=await axiosapiconnector("POST",employee.EMPLOYEE_CREATE_API,information,{
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                })
                console.log(res.data);
                if(res.data.success===false){
                toast.error(res.data.message);
                navigate("/createemployee");
                }
                toast.success(res.data.message);
                navigate("/employeelist");
            } catch (error) {
                toast.error(error.response.data.message);
                navigate("/createemployee")
            }
        dispatch(setLoading(false));
    }
}


// ----------------------------Delete Employee _-----------------------

export const deleteemployee=(id,navigate,setrenderit)=>{

    return async(dispatch)=>{
        dispatch(setLoading(true));
        // console.log(id);
        let res=await apiconnector("POST",employee.DELETE_API,{id})
        // console.log(res);
        toast.success(res.message);
        navigate("/employeelist");
        dispatch(setLoading(false));
        
    }

}


// ------------------------update employee-------------------------------
export const updateemployee=(information,token,navigate)=>{
    // console.log(information);
    return async(dispatch)=>{
        dispatch(setLoading(true));
        let res;
            try {
              res  =await axiosapiconnector("PUT",employee.UPDATE_API,information,{
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                });
            } catch (error) {
                toast.error(error.response.data.message);
                navigate("/employeelist")
            }
            
            // console.log(res.data);
            if(res.data.success){
                toast.success(res.data.message);
            }
            if(res.data.success===false){
                toast.error(res.data.message);  
            }
            navigate("/employeelist")
        dispatch(setLoading(false));
    }
}