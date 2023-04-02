import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border p-4 flex justify-evenly bg-sky-300 shadow-lg '>
      <Link  to="/" className="bg-sky-300 text-[20px] font-semibold" >Home</Link>
      <Link  to="/register"className="bg-sky-300 text-[20px] font-semibold" >Register</Link>
      <Link  to="/login" className="bg-sky-300 text-[20px] font-semibold" >Login</Link>
    </div>
  )
}

export default Navbar
