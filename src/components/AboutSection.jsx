'use client'
import React from 'react'
import aboutImage from '../images/about-image.png'

const AboutSection = () => {
  return (
    <section className="text-white relative" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-4 xl:gap-16 sm:py-16 xl:px-6">
        <a rel="preload" href="/">
          <img
            src={aboutImage}
            width={500}
            height={500}
            alt="aboutPic"
            className="hidden md:block"
          />
        </a>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="section-title text-center">About Me</h2>
          <p className="text-primary-light dark:text-primary-dark text-center md:text-justify lg:text-lg">
            I care deeply about building technology that makes life{' '}
            <span className="font-semibold text-[#bb86fc]">
              easier, fairer, and more accessible{' '}
            </span>{' '}
            for everyone. My journey started in
            <span className="font-semibold text-[#bb86fc]">
              creative design,{' '}
            </span>{' '}
            where I worked as a jewelry designer and learned how much details
            matter.
            <br />
            Later, I moved into{' '}
            <span className="font-semibold text-[#bb86fc]">
              frontend development and UX/UI design
            </span>{' '}
            , where I discovered my passion for solving problems and creating
            intuitive, beautiful applications.
            <br />
            Now, I’m expanding into{' '}
            <span className="font-semibold text-[#bb86fc]">
              AI and Machine Learning
            </span>{' '}
            because I believe intelligent systems should be{' '}
            <span className="font-semibold text-[#bb86fc]">
              {' '}
              understandable, discoverable, and inclusive.{' '}
            </span>{' '}
            I love the challenge of turning complex problems into solutions that
            people can actually use and enjoy.
            <br />
            I’m motivated by{' '}
            <span className="font-semibold text-[#bb86fc]">
              curiosity, teamwork, and the drive to keep learning.{' '}
            </span>{' '}
            Whether it’s refining a user interface, training a model, or
            figuring out the best way to integrate new technology, I bring both
            creativity and focus to every project.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
