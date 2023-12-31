import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
// import AdminHome from "../pages/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";
import AddAClass from "../pages/InstructorDashboard/AddAClass";
import MyClasses from "../pages/InstructorDashboard/MyClasses";
import ManageClasses from "../pages/AdminDashboard/ManageClasses";
import EnrolledClass from "../pages/StudentDashboard/EnrolledClass";
import SelectedClass from "../pages/StudentDashboard/SelectedClass";
import PaymentHistory from "../pages/StudentDashboard/PaymentHistory";
import Classes from "../pages/Classes/Classes";
 



const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/classes',
                element:<Classes></Classes>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
        <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            //admin dashboard
            {
                path:'allusers',
                element: 
                <AllUsers></AllUsers>
              
            },
            {
            path:'manageclasses',
            element:<ManageClasses></ManageClasses>
            },

            //instructor dashboard
            {
                path:'addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path:'myclasses',
                element:<MyClasses></MyClasses>
            },
            //student dashboard
            {
             path:'enrolledclass',
             element:<EnrolledClass></EnrolledClass>
            },
            {
                path:'selectedclass',
                element:<SelectedClass></SelectedClass>
            },
            {
                path:'paymenthistory',
                element:<PaymentHistory></PaymentHistory>
            }
        ]
    }
  ]);
  
  export default router;
  