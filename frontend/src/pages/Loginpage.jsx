import { useState } from "react"
import {Link, Navigate, useNavigate} from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {useDispatch} from "react-redux";
import { login } from "../services/operations/authAPI";
function Loginpage(){
  const dispatch=useDispatch();
  const navigate=useNavigate();
    let [formdata,setformdata]=useState({
        userName:"",
        password:"",
    })
    let [showPassword,setShowPassword]=useState(false);

    // input handler
    function handleOnChange(event){
        setformdata((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }

    function handleOnSubmit(event){
        event.preventDefault();
        dispatch(login(formdata.userName,formdata.password,navigate))
    }
    return (
        <div className="flex mt-11 text-center justify-center items-center">
           <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-5/12 flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          User Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="userName"
          value={formdata.userName}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formdata.password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
        </div>
    )
}

export default Loginpage