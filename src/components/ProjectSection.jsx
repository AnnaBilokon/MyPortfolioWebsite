import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../projectData'

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12 ">
        My projects
      </h2>
      <div className="grid xl:grid-cols-3 justify-items-center gap-8 md:gap-12 ">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
