'use client'
import React, { useRef } from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProjectCard = ({
  imgUrl,
  video,
  title,
  role,
  description,
  gitUrl,
  previewUrl,
  labels,
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['end end', 'start start'],
  })

  const isVideo = Boolean(video)

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-full mx-10 md:flex-row md:max-w-[1244px] gap-10 overflow-hidden">
          <div
            ref={ref}
            className="h-80 w-full md:w-[500px] md:h-full rounded-xl relative group"
          >
            <div className="shadow-lg rounded-lg">
              {isVideo ? (
                <video
                  src={video}
                  controls
                  poster={imgUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-52 md:h-80 object-cover rounded-xl"
                />
              ) : (
                <img
                  src={imgUrl}
                  alt="project"
                  className="w-full h-52 md:h-80 object-cover rounded-xl"
                />
              )}
            </div>

            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-52 md:h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:rounded-xl group-hover:bg-opacity-80 transition-all duration-500 ">
              <a
                href={gitUrl}
                rel="noreferrer"
                target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </a>
              <a
                href={previewUrl}
                rel="noreferrer"
                target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </a>
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2 rounded-b-xl md:mb-24 pt-2 pb-3"
            style={{
              y,
            }}
            transition={{
              duration: 5,
              ease: 'linear',
            }}
          >
            <div className="flex flex-col w-full items-center md:items-start">
              <h5 className="project-title ">{title}</h5>
              <p className="my-4 text-[#bb86fc] font-bold text-lg ">
                <span className="text-black/60 text-justify font-semibold text-lg dark:text-primary-dark">
                  Role:{' '}
                </span>
                {role}
              </p>
              <p className="mx-auto project-description">{description}</p>
              <div className="flex flex-wrap w-full mt-6 gap-1 md:gap-2 mx-auto">
                {labels.map((label, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#342945] text-sm font-semibold text-[#bb86fc] rounded-full"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
