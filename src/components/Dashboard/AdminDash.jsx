import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDash = ({handleLogout}) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header handleLogout={handleLogout} />
            <CreateTask/>
            <AllTask/>
          
        </div>
    )
}

export default AdminDash