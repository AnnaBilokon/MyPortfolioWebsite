import React from 'react'
import { PiCodeDuotone } from 'react-icons/pi'
import { IconContext } from 'react-icons'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between">
        <a
          rel="preload"
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
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
        <p className="text-slate-400 text-sm md:text-base mt-6">
          2022-2025 Anna Bilokon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
