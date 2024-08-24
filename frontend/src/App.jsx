

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Home from "./components/Home"


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
  }
  

 ])

function App() {
  

  return (
    <>
    <RouterProvider router={appRouter}/>

    
    </>
  )
}

export default App
