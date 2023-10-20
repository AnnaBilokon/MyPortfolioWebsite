import React from 'react'

const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] md:p-0 sm:text-xl rounded hover:text-white"
    >
      {title}
    </a>
  )
}

export default NavLink
