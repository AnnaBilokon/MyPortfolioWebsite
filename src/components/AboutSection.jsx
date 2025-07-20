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
            My <span className="font-semibold text-[#bb86fc]">empathy </span>{' '}
            makes me passionate about making applications that are accessible to
            everyone and focused on{' '}
            <span className="font-semibold text-[#bb86fc]">equity, </span>{' '}
            ensuring all users can easily understand and navigate them.
            <br />I love{' '}
            <span className="font-semibold text-[#bb86fc]">
              to solve problems
            </span>{' '}
            and making things work! I work great in teams and enjoy
            collaborating with others to bring ideas to life.
            <br />I like figuring out the best way to solve tricky challenges,
            especially when it helps improve the user experience for{' '}
            <span className="font-semibold text-[#bb86fc]">diverse</span>{' '}
            audiences.
            <br />I am quick to pick up
            <span className="font-semibold text-[#bb86fc]">
              {' '}
              new technologies{' '}
            </span>{' '}
            and always excited{' '}
            <span className="font-semibold text-[#bb86fc]">to learn </span>{' '}
            something new. I care about creating applications that not only look
            good, but are also accessible and intuitive.
            <br />
            <span className="font-semibold text-[#bb86fc]">
              Paying attention to the little details
            </span>{' '}
            is super important to me because I know they can make or break the
            user experience.
            <br />
            When it comes to deadlines, I’m all about staying{' '}
            <span className="font-semibold text-[#bb86fc]">organized</span> and
            getting things done on time.
            <br />
            Whether it’s a big project or a small one, I’m focused on creating
            products that are{' '}
            <span className="font-semibold text-[#bb86fc]">
              understandible, discoverable and easy to use for everyone.{' '}
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
