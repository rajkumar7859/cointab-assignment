import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate=useNavigate()
const userData=JSON.parse(localStorage.getItem("userData"))

const handleLogout=()=>{
  localStorage.removeItem("userData")
navigate("/login")
}

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
    <div className="bg-white shadow-md rounded-[1rem] px-8 pt-6 pb-8 mb-4 -mt-[12rem] w-[30%]">
      <h1 className="text-3xl font-bold mb-6 bg-white">Welcome on Coin tab</h1>
      <hr />
      <p className="text-2xl mb-6 italic bg-white">Email: {userData.email}</p>
      <button
      onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-buttonShadow focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Logout
      </button>
    </div>
    </div>
  )
}

export default Home
