import React from 'react'
import logoImage from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <a
          rel="preload"
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {' '}
          <img src={logoImage} alt="logo" />
        </a>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
