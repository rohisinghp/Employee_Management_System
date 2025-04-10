import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDash from './components/Dashboard/EmployeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)     
  
  const handlelogin = (email, pass) =>{
    if(email === 'admin@me.com' && pass === '123'){
        setUser('admin');
    }
    else if(email === 'user@me.com' && pass === '123'){
        setUser('employee')
    }
    else
      alert("Invalid Credentials")

  }

  const data = useContext(AuthContext)
  console.log(data)

  const handleLogout = ()=>{
    setUser(null);
  }

  return (

    <>
      {!user && <Login handlelogin={handlelogin}/>}

      {user === 'admin' && <AdminDash handleLogout={handleLogout}/>}
      {user === 'employee' && <EmployeDash handleLogout={handleLogout}/>}

       {/* <AdminDash/> */}
        
    </>

  )
}

export default App