import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { IconContext } from 'react-icons'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const form = useRef()

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
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-primary-light dark:text-primary-dark sm:text-lg my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-primary-light dark:text-primary-dark sm:text-lg mb-4 max-w-md">
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
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
      <div>
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
    </section>
  )
}

export default EmailSection
