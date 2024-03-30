import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className='lg:flex flex-row bg-neutral-900 h-screen'>
      <div className='lg:flex'>
          <Sidebar/>
      </div>
      <div className='rounded-3xl bg-white w-screen'>
          {<Outlet/>}
        </div>

    </div>
    
  )
}