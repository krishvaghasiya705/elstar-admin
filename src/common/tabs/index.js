import React from 'react'

export default function Tabs() {
  return (
    <>
        <div className='flex items-center gap-1 whitespace-nowrap overflow-x-auto'>
            <div className='py-2 px-5 flex justify-center items-center group cursor-pointer select-none bg-indigo-50 border-none rounded-md transition-all duration-300 ease-in-out active:bg-indigo-50'>
                <span className='text-sm font-semibold font-InterUi text-indigo-600 group-hover:text-indigo-600 transition-all duration-300 ease-in-out'>All</span>
            </div>
            <div className='py-2 px-5 flex justify-center items-center group cursor-pointer select-none bg-white border-none rounded-md transition-all duration-300 ease-in-out active:bg-indigo-50'>
                <span className='text-sm font-semibold font-InterUi text-gray-500 group-hover:text-indigo-600 transition-all duration-300 ease-in-out'>Task</span>
            </div>
            <div className='py-2 px-5 flex justify-center items-center group cursor-pointer select-none bg-white border-none rounded-md transition-all duration-300 ease-in-out active:bg-indigo-50'>
                <span className='text-sm font-semibold font-InterUi text-gray-500 group-hover:text-indigo-600 transition-all duration-300 ease-in-out'>Bug</span>
            </div>
            <div className='py-2 px-5 flex justify-center items-center group cursor-pointer select-none bg-white border-none rounded-md transition-all duration-300 ease-in-out active:bg-indigo-50'>
                <span className='text-sm font-semibold font-InterUi text-gray-500 group-hover:text-indigo-600 transition-all duration-300 ease-in-out'>Live issue</span>
            </div>
            <div className='py-2 px-5 flex justify-center items-center group cursor-pointer select-none bg-white border-none rounded-md transition-all duration-300 ease-in-out active:bg-indigo-50'>
                <span className='text-sm font-semibold font-InterUi text-gray-500 group-hover:text-indigo-600 transition-all duration-300 ease-in-out'>Low priority</span>
            </div>
        </div>
    </>
  )
}
