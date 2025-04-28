import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/parents",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/messages",
      },
      {
        icon: "/announcement.png",
        label: "Accouncements",
        href: "/accouncements",
      },
    ]
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ]
  }
];

const Menu = () => {
  return (
    <div className='mt-4 px-6 text-base'>
      {menuItems.map(i => (
        <div className='mt-4' key={i.title}>
          <h4 className='mb-2 hidden lg:block'>{i.title}</h4>
          {i.items.map(item => (
            <Link href={item.href} key={item.label} className='flex gap-2 p-2 justify-center lg:justify-start text-slate-800'>
              <Image
                src={item.icon}
                alt=''
                width={20}
                height={20}
              />
              <span className='hidden lg:block'>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu