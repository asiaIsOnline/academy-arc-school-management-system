import React from 'react'
import Image from 'next/image'
import Search from './Search'
import Notification from './Notification'
import MessageNotification from './MessageNotification'

const Navbar = () => {
  return (
    <div className='w-full py-4 px-4 border-l bg-slate-50 flex justify-between'>
      {/* SEARCH BAR */}
      <Search />
      {/* NOTI & PROFILE */}
      <div className='flex items-center gap-6'>
        <MessageNotification />
        <Notification />
        <Image 
         src="/avatar.png"
         alt=''
         width={48}
         height={48}
         className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Navbar