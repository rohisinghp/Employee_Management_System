import React from 'react'

const Header = ({handleLogout}) => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>
        Hello! <br/>
        <span className='text-3xl '> Rohit 👋</span>
        </h1>
        <button
        onClick={handleLogout}
         className='outline-none px-4 py-3 rounded-md bg-red-900 font-medium hover:bg-red-800 cursor-pointer'>LogOut</button>
    </div>
  )
}

export default Header