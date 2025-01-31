'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { IconContext } from 'react-icons'
import { motion, useScroll, useTransform } from 'framer-motion'
import asteroidImage from '../assets/asteroid.png'
import dragMeImage from '../assets/dragme1.png'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const form = useRef()
  const [isHovered, setIsHovered] = useState(false)

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tl8ifmr',
        'template_pj6kl99',
        form.current,
        'nW-afQ52mtug8BgmE',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )

    if (e) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }
  return (
    <section ref={sectionRef} id="contact" className="py-24 relative">
      {' '}
      {/* <motion.img
        src={asteroidImage}
        alt="asteroid"
        width={250}
        className="absolute left-0 -top-100 z-10 opacity-50 md:left-96 md:opacity-100"
        drag
        dragConstraints={{
          top: -200,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        whileHover={{ scale: 1.3 }}
        style={{
          translateY,
        }}
      /> */}
      <motion.div
        className="absolute left-0 -top-24 z-10 opacity-50 md:left-96 md:opacity-100"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.img
          src={asteroidImage}
          alt="asteroid"
          width={260}
          height={260}
          drag
          dragConstraints={{
            top: -200,
            left: -50,
            right: 25,
            bottom: 50,
          }}
          whileHover={{ scale: 1.3 }}
          style={{
            translateY,
          }}
        />

        {/* Tooltip "Drag Me" */}
        {isHovered && (
          <img
            src={dragMeImage}
            alt="drag me"
            width={200}
            height={200}
            className="absolute -top-12 left-[90%]"
          />
        )}
      </motion.div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h5 className="text-xl font-bold text-primary-light dark:text-primary-dark sm:text-lg my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-primary-light dark:text-primary-dark sm:text-lg mb-4 max-w-md">
            {' '}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-6">
            <IconContext.Provider
              value={{
                color: '#bb86fc',
                className: 'global-class-name',
                size: '2rem',
              }}
            >
              <div className="flex flex-row flex-wrap justify-between gap-6 my-4">
                <SiGithub />
                <SiLinkedin />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-lg">
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={sendEmail} ref={form}>
              <div className="mb-6">
                <label
                  htmlFor="reply_to"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="reply_to"
                  type="email"
                  id="reply_to"
                  required
                  className="dark:bg-[#18191E] bg-primary-dark border border-[#392563] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="from_name"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Full Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  id="fron_name"
                  required
                  className="dark:bg-[#18191E] bg-primary-dark border border-[#392563] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="dark:bg-[#18191E] bg-primary-dark border border-[#392563] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-br from-[#d6b0ff] to-[#392563] dark:bg-gradient-to-r dark:from-primary-dark dark:to-[#bb86fc] dark:text-black text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default EmailSection
