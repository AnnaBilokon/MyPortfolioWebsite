import React from 'react'
import ProjectCard from './ProjectCard'
import imageProject1 from '../images/project1.png'
import imageProject2 from '../images/project2.png'
import imageProject3 from '../images/project3.png'

const projectsData = [
  {
    id: 1,
    title: 'React Galaxy Website',
    description:
      'The website was developed as a responsive and adaptive website for corporates or bloggers in general',
    image: imageProject1,
    gitUrl: 'https://github.com/AnnaBilokon/Galaxy-website-react',
    previewUrl: 'https://moonlightsite.netlify.app/',
  },
  {
    id: 2,
    title: 'Fitness Website',
    description:
      'The website that provides information about the exercises which users can find using the search or the classification of exercises depending on the goals and required equipment',
    image: imageProject2,
    gitUrl: 'https://github.com/AnnaBilokon/Fitness-project',
    previewUrl: 'https://fitness-api.netlify.app/',
  },
  {
    id: 3,
    title: 'Barbershop Application',
    description:
      'The expirience of creating a landing webpage using layouts from Figma. It serves as an example of an adaptive and cross-browser website',
    image: imageProject3,
    gitUrl: 'https://github.com/AnnaBilokon/barbershop-Figma-/',
    previewUrl: 'https://16uth.csb.app/',
  },
]

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-8 py-6">
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
