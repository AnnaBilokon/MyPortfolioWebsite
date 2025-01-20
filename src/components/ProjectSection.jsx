import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../projectData'

const ProjectSection = () => {
  return (
    <section id="projects" className="mt-28">
      <h2 className="text-center text-4xl font-bold text-primary-light dark:text-primary-dark mt-8 mb-8 md:mb-12 ">
        My projects
      </h2>
      {/* grid xl:grid-cols-3 justify-items-center gap-8 md:gap-12 */}
      <div className="grid xl:grid-cols-2 justify-items-center gap-8 md:gap-12 ">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            role={project.role}
            description={project.description}
            imgUrl={project.image}
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
