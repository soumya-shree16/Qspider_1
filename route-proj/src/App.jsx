
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Start from "./Start"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { ToastContainer} from 'react-toastify';
import Dashboard from "./components/dashboard/Dashboard"
import CreateUser from "./pages/CreateUser"
import Setting from "./pages/Setting"
import Help from "./pages/Help"
import Users from "./pages/Users"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Allproducts from "./pages/Allproducts"
import ProtectedRoute from "./private/ProtectedRoute"
import Edit from "./pages/Edit"



function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Start/>,
      children:[
        {
          path:"/about",
          element:<About/>
        },
           {
          path:"/",
          element:<Home/>
        },
           {
          path:"/contact",
          element:<Contact/>
        },
           {
          path:"/service",
          element:<Service/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/dashboard",
          element:<ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
          ,
          children:[
            {
            path:"/dashboard/createusers",
            element:<CreateUser/>
          },
            {
            path:"/dashboard/setting",
            element:<Setting/>
          },
            {
            path:"/dashboard/allproducts",
            element:<Allproducts/>
          },
             {
            path:"/dashboard/users",
            element:<Users/>
          },
             {
            path:"/dashboard/cart",
            element:<Cart/>
          },
             {
            path:"/dashboard/profile",
            element:<Profile/>
          },
             {
            path:"/dashboard/help",
            element:<Help/>
          },
          {
            path:"/dashboard/edit",
            element:<Edit/>
          }
        ]
        }
      ]
    }
  ])

  return (
  <>
    <RouterProvider router={routes}/>
    <ToastContainer />
  </>

  )
}

export default App
