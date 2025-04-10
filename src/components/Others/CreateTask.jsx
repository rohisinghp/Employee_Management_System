import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-7 w-full bg-[#1C1C1C] p-5 rounded'>
    <form className='flex flex-wrap w-full items-start justify-between' action="">

        <div className='w-1/2'>
            <h3 className='text-sm text-gray-800 mb-0.5'>Task Title</h3>
            <input className='text-sm w-4/5 rounded bg-transparent  py-1 px-2 outline-none border border-gray-400' type="text" placeholder='Make a UI design' />

            <h1 className='text-sm text-gray-800  mb-0.5' >Date</h1>
            <input className='text-sm w-4/5 rounded bg-transparent  py-1 px-2 outline-none border border-gray-400' type="date" />

            <h3 className='text-sm text-gray-800 mb-0.5'>Assign to</h3>
            <input className='text-sm w-4/5 rounded bg-transparent  py-1 px-2 outline-none border border-gray-400' type="text" placeholder='employee name' />

            <h3 className='text-sm text-gray-800 mb-0.5'>Category</h3>
            <input className='text-sm w-4/5 rounded bg-transparent  py-1 px-2 outline-none border border-gray-400' type="text" placeholder='Desing , dev etc' name="" id="" />

        </div>

        <div className='w-2/5 flex flex-col items-start'>

            <h1 className='text-sm text-gray-800 mb-0.5'>Description</h1>
            <textarea className='w-full h-44 text-sm rounded bg-transparent  py-1 px-2 outline-none border border-gray-400' name="" rows={8} cols={40} id=""></textarea>

            <button className='bg-emerald-600 px-3 py-2 mt-4 rounded-xl w-full'>Create Task</button>

        </div>
    </form>
    <div className='flex justify-center '>

    </div>

</div>
  )
}

export default CreateTask