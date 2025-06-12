'use client'
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useScroll, useTransform } from 'framer-motion'
import asteroidImage from '../assets/asteroid.png'

import { projectsData } from '../projectData'

const ProjectSection = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [1000, -1000])

  return (
    <section ref={sectionRef} id="projects" className="mt-28 relative">
      <h2 className="text-center section-title md:mb-20">My projects</h2>

      <motion.img
        src={asteroidImage}
        alt="asteroid"
        width={300}
        className="absolute right-0 top-[70%] z-10 opacity-50 md:-right-12 md:opacity-100"
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
      />

      <motion.img
        src={asteroidImage}
        alt="asteroid"
        width={150}
        className="absolute left-0 top-[50%] z-10 opacity-50 md:opacity-100"
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
      />

      {/* grid xl:grid-cols-3 justify-items-center gap-8 md:gap-12 */}
      <div className="flex flex-col justify-items-center gap-[20px] md:gap-[60px]">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            role={project.role}
            description={project.description}
            imgUrl={project.image}
            video={project.video}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            labels={project.labels}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
