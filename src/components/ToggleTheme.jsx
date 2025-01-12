import React, { useState } from 'react'

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="py-3 px-5 rounded-full font-semibold border-2 border-black hover:scale-105 transition-all duration-300"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}
