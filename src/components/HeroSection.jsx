import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroImage from '../images/hero-image.png'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52ACFF] via-yellow-00 to-[#FFE32C]">
              Hello, I am{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Anna Bilokon',
                1000,
                'Front-End Developer',
                1000,
                'Focused on UI Design',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl">
            I am an enthusiastic, adaptable, focused and motivated Front-end
            Developer with the focus on UI Design who is seeking an opportunity
            to contribute my knowledge into interesting projects. I am excited
            to be a part of a team that values creativity, innovation, and
            user-centric design.
          </p>

          <div>
            <button
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#52ACFF]  to-[#FFE32C] hover:bg-slate-200 text-black"
            >
              <a href="#contact">Hire Me</a>
            </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="resume.pdf"
                download="resume.pdf"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative left-6">
            <img
              src={heroImage}
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
