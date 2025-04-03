  import React from 'react'
import Header from '../Others/Header'
import Task from '../Others/Task'
import Tasklist from '../TaskList/Tasklist'
  
  const EmployeDash = () => {
    return (
        
      <div className='py-10 px-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <Task/> 
        <Tasklist/>
      </div>
    ) 
  }
   
  export default EmployeDash