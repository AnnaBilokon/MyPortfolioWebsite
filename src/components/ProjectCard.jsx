import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  labels,
}) => {
  return (
    <div>
      <div
        className="h-80 w-96 md:h-96 md:w-540 rounded-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:rounded-xl group-hover:bg-opacity-80 transition-all duration-500 ">
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
      <div className="text-white rounded-b-xl mb-24 pt-2 pb-6">
        <h5 className="text-xl font-semibold mt-3 mb-2 text-primary-light dark:text-primary-dark">
          {title}
        </h5>
        <p className="w-540 h-36 text-primary-light text-justify dark:text-primary-dark">
          {description}
        </p>
        <div className="w-540 mt-6 flex flex-wrap gap-2">
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
    </div>
  )
}

export default ProjectCard
