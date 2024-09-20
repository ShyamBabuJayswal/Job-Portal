

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Home from "./components/Home"
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDescription from './components/JobDescription'
import Companies from "./components/admin/Companies"
import CompanySetup from "./components/admin/CompanySetup"
import CompanyCreate from "./components/admin/CompanyCreate"


 const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
  path:"/description/:jobId",
   element:<JobDescription />
},

  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  //for admin start from here
  {
    path:'/admin/companies',
    element:<Companies/>
  },
  {
    path:'/admin/companies/create',
    element:<CompanyCreate/>
  },
  {
    path:'/admin/companies/:id',
    element:<CompanySetup/>
  }
  

 ])

function App() {
  

  return (
    <>
    <RouterProvider router = {appRouter}/>

    
    </>
  )
}

export default App
