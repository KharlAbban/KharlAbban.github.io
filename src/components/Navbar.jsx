import React, { useState } from 'react'
import { navmenuitems } from '../constants/headings'
import { NavLink } from 'react-router-dom'
import CustomButton from './CustomButton'
import { FaHamburger } from 'react-icons/fa'

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isopen);
  
  return (
    <nav className='navbar'>
      <figure>
        <img src="/logo_icon_light.jpg" className='h-8' alt="KharlAbban" />
        <figcaption className='sr-only'>KharlAbban</figcaption>
      </figure>
      <div className="flex items-center justify-end gap-6 max-md:hidden">
        {navmenuitems.map((menuItem, idx) => {
          return (
            <NavLink
              className={({isActive}) => (
                `${isActive ? "font-bold text-xl" : ""} hover:underline hover:opacity-80 duration-100`
              )}
              key={menuItem.id}
              to={menuItem.linkTo}>
                {menuItem.linkName}
              </NavLink>
          )
        })}
      </div>
      <CustomButton text="Get in Touch" btnType="one" otherStyles="max-md:hidden" />
        <FaHamburger onClick={toggleMenu} className='md:hidden hover:text-lt-sec-bg cursor-pointer' size={25} />
        {isopen && <div className="absolute end-4 top-full dark:bg-dt-nav-bg bg-white transition-all duration-200 ease-in-out md:hidden">
              <div className="flex flex-col gap-3 px-8 py-2">
                {navmenuitems.map((menuItem, idx) => (
                  <NavLink
                    className={({isActive}) => (
                      `${isActive? "font-bold text-xl" : ""} text-lg hover:underline hover:opacity-80 duration-100`
                    )}
                    key={menuItem.id}
                    to={menuItem.linkTo}>
                    {menuItem.linkName}
                  </NavLink>
                ))}
              </div>
        </div>}
    </nav>
  )
}

export default Navbar