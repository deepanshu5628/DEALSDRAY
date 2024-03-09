import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { createemployee } from "../services/operations/authAPI";

function CreateEmployeepage(){
    const {token,loading}=useSelector((state)=>state.auth);
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    let [formdata,setformdata]=useState({
        name:"",
        email:"",
        mobileno:"",
        designation:"",
        gender:"",
        course:"",
    })
    let [file,setfile]=useState(null);
    
    function imagefilehandler(event){
        setfile(event.target.files[0]);
    }
    function formchangehandler(event){
        setformdata((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        });
    }

    
    let information={
        name:formdata.name,
        email:formdata.email,
        mobileno:formdata.mobileno,
        gender:formdata.gender,
        course:formdata.course,
        designation:formdata.designation,
        image:file,
    }
    
    function submithandler(event){
        event.preventDefault();
        dispatch(createemployee(information,token,navigate));
    }
    return (
        <div className="flex  items-center justify-center  mt-3 text-s ">
            {
                loading ? 
                <div className="loader"></div> :
                <form  onSubmit={submithandler} className="flex flex-col" encType="multipart/form-data">
                {/* name */}
                <label >Name: 
                    <input type="text" 
                    placeholder="enter name" 
                    name="name" 
                    value={formdata.name} 
                    onChange={formchangehandler} 
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    required
                    />
                </label>
                <br />
                {/* email */}
                <label >Email: 
                    <input type="text" 
                    placeholder="enter email"
                     name="email" 
                     value={formdata.email}
                      onChange={formchangehandler}
                      style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                      required/>
                </label>
                <br />
                {/* phone no  */}
                <label >Mobile NO: 
                    <input type="number"
                     minLength={10} 
                     maxLength={10} 
                     placeholder="enter mobile no " 
                     name="mobileno" 
                     style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                     value={formdata.mobileno}
                      onChange={formchangehandler}
                      required/>
                </label>
                <br />
                {/* designation */}
                <label >Designation:
                <select name="designation" 
                  onChange={formchangehandler}
                  style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                   required>
                    <option >Choose</option>
                    <option value={"HR"}>HR</option>
                    <option value={"Manager"}>Mangaer</option>
                    <option value={"Sales"}>Sales</option>
                </select>
                </label>
                <br />
                {/* genrer */}
               <label required 
               onChange={formchangehandler} 
               style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                >Gender:
               <label >Male:
                    <input type="radio"  value={"Male"} name="gender"  />
                </label>
                <label >Female:
                    <input type="radio" value={"Female"} name="gender" />
                </label>
               </label>
                <br />
                {/* course */}
                <label required
                 onChange={formchangehandler} 
                 style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                 >Course:
                <label >MCA 
                    <input type="checkbox"
                     value={"MCA"}
                      name="course" />
                </label>
                <label >BCA
                    <input type="checkbox"
                     name="course"
                      value={"BCA"} />
                </label>
                <label >BSC 
                    <input type="checkbox" 
                    name="course" 
                    value={"BSC"} />
                </label>
                </label>
                <br />
                {/* image */}
                <label >Image:
                <input type="file" 
                required
                 name="file"
                 style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                  className="w-full form-control rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                 onChange={imagefilehandler}
                 />
                </label>
                <br />
                <button type="submit"
                 className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                >Create</button>
            </form>
            }
        </div>
    )
}

export default CreateEmployeepage;