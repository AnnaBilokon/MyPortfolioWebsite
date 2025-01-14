import React, { useEffect } from 'react'
import gsap from 'gsap'
import { TypeAnimation } from 'react-type-animation'
import heroImage from '../images/hero-image.png'

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '#gsap-img',
      {
        scale: 2.5, // Start with a large scale
        opacity: 1, // Start with zero opacity
        x: 0, // Start with a slight offset on x-axis
        y: 0, // Start with a slight offset on y-axis
      },
      {
        duration: 5,
        scale: 1, // End with scale 1 (original size)
        opacity: 1, // End with full opacity
        x: -10, // End with no x-axis offset
        y: -10, // End with no y-axis offset
        ease: 'power3.out', // Add an easing effect for smoother animation
      },
    )
  }, [])
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-[#46365a] dark:text-[#bb86fc] mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6b0ff] to-[#392563] dark:bg-gradient-to-r dark:from-primary-dark dark:to-[#bb86fc]">
              Hello, I am{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Anna Bilokon',
                1000,
                'Front-end Developer',
                1000,
                'UX/UI Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: '48px',
                display: 'inline-block',
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary-light mr-10 dark:text-primary-dark sm:text-lg mb-6 lg:text-xl">
            Creative and empathetic Front-end developer with a passion for UX/UI
            design and for crafting beautiful, user-friendly products. My
            experience spans from designing custom jewelry to building
            interactive web interfaces, blending aesthetics with functionality.
            I’m driven by an empathy to users and desire to create intuitive
            equity-focused applications that truly meet user needs, combining
            technical skills with a deep understanding of design principles.
          </p>

          <div>
            <button
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#d6b0ff] to-[#392563] hover:bg-slate-200 text-primary-dark"
            >
              <a href="#contact">Hire Me</a>
            </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full border-primary-light hover:bg-primary-light hover:text-primary-dark text-primary-light mt-3 dark:text-primary-dark">
              <a
                rel="noreferrer"
                target="_blank"
                href="resume.pdf"
                download="resume.pdf"
                className="block border-primary-light hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full ml-12 bg-[#342945] dark:bg-[#121212] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] left-6">
            <img
              src={heroImage}
              id="gsap-img"
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-0 md:right-1/2 right-52"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
