import React from 'react'
import CreateEventBtn from './CreateEventBtn'
import SidebarCalendar from './SidebarCalendar'

const Sidebar = () => {
  return (
    <aside className='w-64 border p-5'>
      <CreateEventBtn />
      <SidebarCalendar />
    </aside>
  )
}

export default Sidebar