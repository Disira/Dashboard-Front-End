import React from 'react'
import Profile from '/src/assets/Profile.svg'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='p-16 bg-neutral-900 text-white lg:flex flex-col '>

      <div className='lg:flex justify-between'>
        <div className='py-2 h-48 w-44'>
        <div className='px-[50px] absolute'>
          <div className='absolute item-center w-[20px] h-[20px] rounded-full bg-red-700 text-center  text-white'>4</div> 
        </div> 
          <img src={Profile} />
          <div className='text-white py-1 text-xl font-semibold'>Samantha</div>
          <div className='text-sm text-zinc-300 text-opacity-80'>samantha@email.com</div>
        </div>

      </div>

      <div className='flex-1 '>
        {DASHBOARD_SIDEBAR_LINKS.map((Expenses) => (
          <SidebarLink key={Expenses.key} Expenses={Expenses} />
        ))}
      </div>
    </div>
  )
}


function SidebarLink({ Expenses }) {

  return (
    <Link to={Expenses.path}>
      <div className='lg:text-xl text-gray-300 pt-4 hover:text-white hover:font-bold active:text-White'>{Expenses.label}</div>
    </Link>
  )
}
