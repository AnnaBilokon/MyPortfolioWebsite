'use client'
import React, { useTransition, useState } from 'react'
import aboutImage from '../images/about-image.png'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>APIs</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Educational center SkillUp</li>
        <li>Taras Shevchenko National University of Kyiv</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End Developer Course Certificate № KV 00345</li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <a rel="preload" href="/">
          <img src={aboutImage} width={500} height={500} alt="aboutPic" />
        </a>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My journey into web development began when I realized the power of
            code in bringing creative ideas to life. I am constantly inspired by
            the ever-evolving nature of the web, and I am committed to staying
            up-to-date with industry trends, as it allows me to continually
            acquire new skills, get fresh challenges and grow as a proficient
            developer by solving problems.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certification{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
