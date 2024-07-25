import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { ToastManager } from './components/ToastManager'
import NewProperty from './components/NewProperty'
import Myproperty from './components/Myproperty'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'newproperty',
      element:<NewProperty/>

    },
    {
      path:'myproperty',
      element:<Myproperty/>
    }
  ])
  return (
    <>

    <ToastManager></ToastManager>
       <RouterProvider router={router}/>
      
    </>
  )
}

export default App
