import React from 'react'
import logo from '../assets/logo.png'

const CalendarHeader = () => {
  return (
    <header className='flex items-center px-4 py-2'>
      <img src={logo} alt="A calendar icon" className='mr-2 h-12 w-12' />
      <h1 className='mr-10 text-2xl text-gray-600 font-900'>Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_left
        </span>
      </button>
      <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_right
        </span>
      </button>
    </header>
  )
}

export default CalendarHeader