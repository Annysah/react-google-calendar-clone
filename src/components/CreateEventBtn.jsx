import React, { useContext } from 'react'
import plus from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

const CreateEventBtn = () => {
  const { setShowModal } = useContext(GlobalContext)
  return (
    <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl' onClick={() => setShowModal(true)}>
        <img src={plus} alt="A button to create event" className='w-7 h-7 ml-2'/>
        <span className='pl-3 pr-7 text-gray-600 font-800'>Create</span>
    </button>
  )
}

export default CreateEventBtn