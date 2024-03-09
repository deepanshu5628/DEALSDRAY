import './App.css'
import {Route,Routes} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Homepage from "./pages/Homepage"
import Dashboardpage from "./pages/Dashboardpage"
import Loginpage from "./pages/Loginpage";
import CreateEmployeepage from "./pages/CreateEmployeepage";
import Employeedetails from './pages/Employeedetails';
import Employeeedit from './pages/Employeeedit';

function App() {
  return (
    <div className='w-screen min-h-screen  bg-richblack-900 text-richblack-25 flex flex-col font-inte'>
    <Navbar/>
    <Routes>
    <Route path='/' Component={Loginpage}  />
      <Route path='/dashboard' Component={Dashboardpage} />
      <Route path='/createEmployee' Component={CreateEmployeepage} />
      <Route path='/employeelist' Component={Employeedetails} />
      <Route path='/editemployee' Component={Employeeedit} />
    </Routes>
    </div>
  )
}

export default App
