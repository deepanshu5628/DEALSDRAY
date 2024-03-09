import { useEffect, useState } from "react";
import { apiconnector } from "../services/apiconnector";
import { employee } from "../services/apis";
import Details from "../components/employedetails/Details";
import {useDispatch, useSelector} from "react-redux"
import {settotalemployee} from "../redux/Slices/employeeSlice";
import { deleteemployee } from "../services/operations/authAPI";
import {useNavigate} from "react-router-dom";
import { setLoading } from "../redux/Slices/authSlice";

function Employeedetails(){
    const dispatch=useDispatch();
    const navigate=useNavigate();

    let {loading}=useSelector((state)=>state.auth);
    let {totalemployee}=useSelector((state)=>state.employee);

    let [details,setdetails]=useState([]);
    let [renderit,setrenderit]=useState(false);
    async function fetchalldetails(){
        dispatch(setLoading(true));
        let result=await apiconnector("GET",employee.GETALLDETAILS_API);
        setdetails(result.data);
        dispatch(settotalemployee(result.data.length));
        dispatch(setLoading(false));
    }
    useEffect(()=>{
        fetchalldetails();
    },[]);
// delete emp
    async function deleteemp(id){
        // console.log(id);
         dispatch(deleteemployee(id,navigate,setrenderit)); 
        }
// edit emdp
    async function editemp(entry){
        navigate("/editemployee",{state:entry});
    }
    return (
        <div>
            {
                loading?
                <div className="loader">   </div> :
                <table class="table-auto w-10/12 items-center ml-[8%] mr-[8%] mt-20 ">
                <thead>
                    <tr className="mx-10 my-10 gap-10">
                        <th>Uniqure id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th >Email</th>
                        <th>MobileNO</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>CreatedAt</th>
                        <th>Action</th>
                    </tr>
                 </thead>
                 <tbody>
                   {
                   totalemployee ===0 ? <div className="w-full min-h-60 flex font-bold items-center justify-center text-center">
                        <div className="flex  ">
                            <p className="text-center ml-40 ">List is empty </p>
                        </div>
                    </div>
                                            
                                            :
                                            details.map((entry,index)=>{
                                                return <tr key={index} className="border-richblue-300 border-b-4 mt-2 border-solid">
                                                    <td>{index+1}</td>
                                                    <td> <img src={entry.image} alt="phto" height={14} width={60} /> </td>
                                                    <td>{entry.name}</td>
                                                    <td className="pl-4" >{entry.email}</td>
                                                    <td className="pl-4">{entry.mobileno}</td>
                                                    <td className="pl-4">{entry.designation}</td>
                                                    <td>{entry.gender}</td>
                                                    <td>{entry.course}</td>
                                                    <td>{entry.createdAt}</td>
                                                    <td ><button className="pr-3" onClick={()=>editemp(entry)} >Edit</button>
                                                    <button className="hover:bg-pink-600 hover:border rounded-md" onClick={()=>deleteemp(entry._id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            })

                    }
                </tbody>
            </table>
            }
        </div>
    )
}

export default Employeedetails;





{/* <div>
        //     <div className="relative">

        //     </div>
        //     <div className="flex gap-20"> 
        //         <p>name</p>
        //         <p className="pl-6">email</p>
        //         <p >mobileno</p>
        //         <p>designation</p>
        //         <p>gender</p>
        //         <p>course</p>
        //         <p>createdAt</p>
        //         <p>action</p>
        //     </div>
            
        //     {
        //         details.map((entry,index)=>{
        //             return <Details key={index} data={entry} />
        //         })
        //     }
        // </div> */}