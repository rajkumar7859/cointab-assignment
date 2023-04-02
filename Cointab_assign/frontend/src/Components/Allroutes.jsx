import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Routes/Home'
import Login from '../Routes/Login'
import Register from '../Routes/Register'
import Navbar from './Navbar'

const Allroutes = () => {
  return (
    <div>
        <Navbar />
    <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/register'  element={<Register />}/>
        <Route path='/login'  element={<Login />}/>
    </Routes>
    </div>
  )
}

export default Allroutes
