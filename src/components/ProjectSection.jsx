import React from 'react'
import ProjectCard from './ProjectCard'
import imageProject1 from '../images/project1.png'
import imageProject2 from '../images/project2.png'
import imageProject3 from '../images/project3.png'
import imageProject4 from '../images/project4.png'
import imageProject5 from '../images/project5.png'
import imageProject6 from '../images/project6.png'

const projectsData = [
  {
    id: 4,
    title: 'UX/UI Design Case Study',
    description: `This project is a design case study project for an audiobook app for children that will help occupy 
	child's time productively. While working on the project, I studied the principles 
	of UX/UI design and the design thinking process. I also have improved my skills in Figma, enhancing my proficiency in creating prototypes and wireframes. 
	I worked on developing visual design elements and accessibility features for this application.`,
    image: imageProject4,
    gitUrl:
      'https://www.behance.net/gallery/186796671/UXUI-Design-Case-Study-The-magic-library',
    previewUrl:
      'https://www.behance.net/gallery/186796671/UXUI-Design-Case-Study-The-magic-library',
  },
  {
    id: 6,
    title: 'E-commerce website',
    description: `ReadMe Bookshop website that can be used as an online store, 
	where you can easily select the desired product by category, find out detailed information 
	about it, add products to the cart and see the total amount for several products. New features are in progress
	(HTML5/CSS3/JavaScript/React)`,
    image: imageProject6,
    gitUrl: 'https://github.com/AnnaBilokon/ReadMeShop',
    previewUrl: 'https://readmeshop.netlify.app/',
  },
  {
    id: 1,
    title: 'React Galaxy Website',
    description: `The website was developed as a responsive and adaptive website for corporates or bloggers in general.
	  (HTML5/CSS3/JavaScript/React)`,
    image: imageProject1,
    gitUrl: 'https://github.com/AnnaBilokon/Galaxy-website-react',
    previewUrl: 'https://moonlightsite.netlify.app/',
  },
  {
    id: 2,
    title: 'Fitness Website',
    description: `The website that provides information about the exercises which users 
	  can find using the search or the classification of exercises depending
	   on the goals and required equipment.(HTML5/CSS3/JavaScript/React/API/Material UI)`,
    image: imageProject2,
    gitUrl: 'https://github.com/AnnaBilokon/Fitness-project',
    previewUrl: 'https://fitness-api.netlify.app/',
  },
  {
    id: 3,
    title: 'Barbershop Application',
    description: `The expirience of creating a landing webpage using layouts from Figma. It serves as an example
	   of an adaptive and cross-browser website. (HTML5/CSS3/JavaScript/Figma )`,
    image: imageProject3,
    gitUrl: 'https://github.com/AnnaBilokon/barbershop-Figma-/',
    previewUrl: 'https://16uth.csb.app/',
  },
  {
    id: 5,
    title: 'My portfolio project',
    description: `The portfolio website project that represents me, my skills and projects. (HTML5/CSS3/JavaScript/React,Tailwind) `,
    image: imageProject5,
    gitUrl: 'https://github.com/AnnaBilokon/MyPortfolioWebsite',
    previewUrl: 'https://myportfolioab.netlify.app/',
  },
]

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
