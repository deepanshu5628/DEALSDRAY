import { useDispatch, useSelector } from "react-redux";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { logout } from "../../services/operations/authAPI";

function Navbar(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {token,username}=useSelector((state)=>state.auth);
   

    function logouthandler(){
        dispatch(logout(navigate));
    }
    return (
        <div className="h-20 flex justify-between bg-richblack-700
         text-richblack-25 text-center items-center px-4 py-5  ">

            {
                token ===null && <div className="flex justify-between ml-[45%] mr-[45%]  ">
                    <div><p className="font-bold text-3xl text-yellow-300">DealsDray</p></div>
                </div>
            }
             {
                token !==null &&  
                <div className="flex justify-between w-full px-10">
                    <div className="flex gap-6  ">
                        <Link to={"/dashboard"}>
                            <button>Home</button>
                        </Link>
                        <Link to={"/employeelist "}>
                            <button>Employee List</button>
                        </Link>
                        <Link to={"/createEmployee "}>
                            <button>Create</button>
                        </Link>
                    </div>
                    <div className="flex gap-6 cursor-pointer">
                        <p>{username}</p>
                        <button onClick={logouthandler}>Logout</button>
                    </div>
                </div>
            }
            
           
           
        </div>
    )
}
export default Navbar;