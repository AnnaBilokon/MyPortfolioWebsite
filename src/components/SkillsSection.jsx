import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
} from 'react-icons/si'
import { IconContext } from 'react-icons'

export default function SkillsSection() {
  return (
    <div className="my-14">
      <h1 className="text-4xl font-bold text-center text-primary-light dark:text-primary-dark">
        Skills
      </h1>
      <IconContext.Provider
        value={{
          color: '#bb86fc',
          className: 'global-class-name',
          size: '4rem',
        }}
      >
        <div className="flex flex-row flex-wrap justify-between gap-10 my-16">
          <SiHtml5 />
          <SiCss3 />
          <SiFigma />
          <SiJavascript />
          <SiReact />
          <SiTypescript />
          <SiNodedotjs />
          <SiTailwindcss />
          <SiNextdotjs />
        </div>
      </IconContext.Provider>
    </div>
  )
}
