'use client'
import React, { useContext, useState } from 'react'
import NavLink from '../components/Navlinks'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import ThemeContext from '../ThemeContext.jsx'
import { PiCodeDuotone } from 'react-icons/pi'
import { IconContext } from 'react-icons'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <nav className="flex flex-row justify-between fixed mx-auto py-3 top-0 left-0 right-0 z-10 bg-opacity-50 backdrop-blur-lg">
      <a
        rel="preload"
        href="/"
        className="text-2xl md:text-5xl font-semibold mx-6"
      >
        {' '}
        <IconContext.Provider
          value={{
            color: '#a275d9',
            className: 'global-class-name',
            size: '4rem',
          }}
        >
          {' '}
          <PiCodeDuotone />
        </IconContext.Provider>
      </a>
      <div className="flex lg:py-4 flex-wrap justify-center items-center mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 dark:text-primary-dark hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white dark:text-white"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="w-[70px] text-center md:w-fit h-8 md:h-10 px-2 md:px-8 mx-2 md:mx-6 my-4 rounded-full font-normal text-xs md:text-sm border md:border-2 border-primary-light hover:scale-105 transition-all duration-300 dark:border-primary-dark dark:text-primary-dark"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
