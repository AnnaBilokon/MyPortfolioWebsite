'use client'
import React, { useRef, useState } from 'react'
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
import { TbBrandFramerMotion } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import { motion, useScroll, useTransform } from 'framer-motion'
import asteroidImage from '../assets/asteroid.png'
import dragMeImage from '../assets/dragme1.png'

export default function SkillsSection() {
  const [isHovered, setIsHovered] = useState(false)

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300])

  return (
    <section ref={sectionRef} className="py-14 overflow-hidden">
      <div>
        {' '}
        <h1 className="section-title text-center">Skills</h1>
      </div>
      <motion.div
        className="absolute left-0 -bottom-[120%] z-20 opacity-50 md:left-8 md:opacity-100"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.img
          src={asteroidImage}
          alt="asteroid"
          width={300}
          height={300}
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
            className="absolute -top-12 left-[90%] "
          />
        )}
      </motion.div>

      <motion.div
        className="absolute right-0 -bottom-[120%] z-20 opacity-50 md:right-8 md:opacity-100 overflow-visible"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.img
          src={asteroidImage}
          alt="asteroid"
          width={100}
          height={100}
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
            className="absolute -top-12 left-[30%] "
          />
        )}
      </motion.div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="mt-14"
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          <IconContext.Provider
            value={{
              color: '#bb86fc',
              className: 'global-class-name',
              size: '4rem',
            }}
          >
            <div className="flex gap-14 flex-none pr-14">
              <SiHtml5 />
              <SiCss3 />
              <SiFigma />
              <SiJavascript />
              <SiReact />
              <SiTypescript />
              <SiNodedotjs />
              <SiTailwindcss />
              <SiNextdotjs />
              <TbBrandFramerMotion />

              <SiHtml5 />
              <SiCss3 />
              <SiFigma />
              <SiJavascript />
              <SiReact />
              <SiTypescript />
              <SiNodedotjs />
              <SiTailwindcss />
              <SiNextdotjs />
              <TbBrandFramerMotion />
            </div>
          </IconContext.Provider>
        </motion.div>
      </div>
    </section>
  )
}
