import React from 'react'
import { useState } from 'react'

const Login = ({handlelogin}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    
    e.preventDefault();
    // console.log(` i am ${email} and pass is ${password}`)
    handlelogin(email,password)
    setEmail("")
    setPassword("")
  }

  const Handler = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className='flex h-screen w-screen justify-center items-center '>
      <div className='border border-emerald-500 px-18 py-30 rounded-2xl'>
        <form onSubmit={(e) => submitHandler(e)} action="" className='flex flex-col items-center justify-center'>

          <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={(e) => Handler(e)}
            required className='border-emerald-500 border-1 outline-none px-4 py-3 rounded-full mb-5 ' />

          <input required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-emerald-500 border-1 outline-none px-4 py-3 rounded-full mb-5 ' type="password" placeholder='password' />

          <button className='border-emerald-500 border-1 outline-none px-7 py-3 rounded-full mb-5 cursor-pointer bg-emerald-500 hover:bg-emerald-600'>Login  </button>

        </form>
      </div>

    </div>
  )
}

export default Login   
