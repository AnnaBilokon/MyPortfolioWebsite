import imageProject1 from './images/project1.svg'
// import imageProject2 from './images/project2.png'
// import imageProject3 from './images/project3.svg'
import imageProject4 from './images/project4.png'
import imageProject5 from './images/project5.jpg'
import imageProject9 from './images/project9.png'
import imageProject7 from './images/project7.png'
import imageProject8 from './images/project8.svg'

export const projectsData = [
	{
		id: 1,
		title: 'Future Solution',
		role: 'Front-end developer',
		description: `Developed a modern SaaS landing page ensuring full responsiveness across all devices. Every section includes smooth, high-performance animations for an engaging user experience.
		Parallax effects, infinite scrolling animations for testimonials section, micro interactions across the website. The project focuses on clean design, performance, and animated effects`,
		image: imageProject1, 
		gitUrl: 'https://github.com/AnnaBilokon/landing-page-saas-project',
		previewUrl:
		  'https://futuresolution.netlify.app/',
		labels: ['Typescript', 'Next js', 'React', 'Figma', 'Tailwind', 'Framer Motion', ],
	  },
	{
		id: 8,
		title: 'Gaia.eco project by Illuminum',
		role: 'Front-end developer & UI designer ',
		description: `As a Front-end developer in this project I developed and maintained code for an application based on the R language in Shiny RStudio. The purpose of the project is to provide data to 
		users of different profiles for preserving biodiversity. Design and prototype web application components 
		and features using Figma.`,
		image: imageProject8,
		previewUrl:
		  'https://illuminum.shinyapps.io/gaia-lite/',
		labels: ['Shiny R', 'CSS', 'Figma', 'Tailwind', 'RStudio', 'Git', 'JavaScript'],
	  },
	//   {
	// 	id: 6,
	// 	title: 'ReadMe Bookshop',
	// 	role: 'Front-end developer',
	// 	description: `E-commerce website that can be used as an online store, 
	// 	where you can easily select the desired product by seacrhing, find out detailed information 
	// 	about it, add products to the cart. Authentication with Clerk and admin dashboard for managing new products. Dark and light mode. New features are in progress
	// 	`,
	// 	image: imageProject6,
	// 	gitUrl: 'https://github.com/AnnaBilokon/BookshopTypescript',
	// 	previewUrl: 'https://readmeshop.vercel.app/',
	// 	labels: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Figma', 'Tailwind', 'Vercel', 'Clerk']
	//   },
	  {
		id: 9,
		title: 'ReadMe Bookshop',
		role: 'Front-end developer',
		description: `E-commerce website that can be used as an online store, 
		where you can easily select the desired product by seacrhing, find out detailed information 
		about it, add products to the cart. Updates are in progress
		`,
		image: imageProject9,
		gitUrl: 'https://github.com/AnnaBilokon/ReadMeShop',
		previewUrl: 'https://readmeshop.netlify.app/',
		labels: ['HTML', 'CSS', 'React', 'Node.js', 'Figma', 'Tailwind', ]
	  },
	//   {
	// 	id: 3,
	// 	title: 'Yoga Space',
	// 	role: 'UX & UI designer ',
	// 	description: `UX/UI design for the yoga studio. The website will serve as an online hub for current and potential clients, offering information about classes, schedules, instructors, and wellness resources. `,
	// 	image: imageProject3,
	// 	gitUrl:
	// 	  'https://www.behance.net/gallery/217056913/Yoga-Space',
	// 	previewUrl:
	// 	  'https://www.behance.net/gallery/217056913/Yoga-Space',
	// 	  labels: ['Figma', 'UX', 'UI', 'Prototyping', 'Wireframing', 'Design principles' ],
	//   },

	{
		id: 5,
		title: 'Anafragipana.art',
		role: 'UX & UI designer | Front-end developer ',
		description: `Designing and developing the responsive and cross-browser personal website for the graphic designer.
  Creating visually appealing and functional user experience interface tailored to the specific needs of the client in the field of graphic design. 
  Prototyping and visualization in Figma, the final website is implemented on Webflow.`,
		image: imageProject5,
		gitUrl: 'https://anafragipana.webflow.io/',
		previewUrl: 'https://anafragipana.webflow.io/',
		labels: ['Webflow', 'Responsive design','Prototyping', 'Communication', 'Figma']
	  },
	  {
		id: 7,
		title: 'Tic-Tac-Toe Game',
		role: 'Front-end developer ',
		description: `This project is a classic Tic Tac Toe game, designed and developed as part of my front-end development studying. 
		The game is built using HTML, CSS, JavaScript and React, offering an interactive and responsive user experience. `,
		image: imageProject7,
		gitUrl:
		  'https://github.com/AnnaBilokon/Tic-Tac-Game',
		previewUrl:
		  'https://tictactoes-game.netlify.app/',
		  labels: ['HTML', 'CSS', 'JavaScript', 'React', ],
	  },
	  {
		id: 4,
		title: 'UX/UI Design Case Study',
		role: 'UX & UI designer ',
		description: `This project is a design case study project for an audiobook app for children that will help occupy 
		child's time productively. While working on the project, I studied the principles 
		of UX/UI design and the design thinking process. I also have improved my skills in Figma, enhancing my proficiency in creating prototypes and wireframes. 
		I worked on developing visual design elements and accessibility features for this application.`,
		image: imageProject4,
		gitUrl:
		  'https://www.behance.net/gallery/186796671/UXUI-Design-Case-Study-The-magic-library',
		previewUrl:
		  'https://www.behance.net/gallery/186796671/UXUI-Design-Case-Study-The-magic-library',
		  labels: ['Figma', 'UX design principles', 'UI', 'Design thinking process']
	  },
	  
	// {
	//   id: 1,
	//   title: 'React Galaxy Website',
	//   description: `The website was developed as a responsive and adaptive website for corporates or bloggers in general.
	// 	(HTML5/CSS3/JavaScript/React)`,
	//   image: imageProject1,
	//   gitUrl: 'https://github.com/AnnaBilokon/Galaxy-website-react',
	//   previewUrl: 'https://moonlightsite.netlify.app/',
	//   labels: ['Shiny R', 'CSS', 'Figma', 'Tailwind', 'RStudio']
	// },
	// {
	//   id: 2,
	//   title: 'Fitness Website',
	//   description: `The website that provides information about the exercises which users 
	// 	can find using the search or the classification of exercises depending
	// 	 on the goals and required equipment.(HTML5/CSS3/JavaScript/React/API/Material UI)`,
	//   image: imageProject2,
	//   gitUrl: 'https://github.com/AnnaBilokon/Fitness-project',
	//   previewUrl: 'https://fitness-api.netlify.app/',
	//   labels: ['Shiny R', 'CSS', 'Figma', 'Tailwind', 'RStudio']
	// },
	// {
	//   id: 3,
	//   title: 'Barbershop Application',
	//   description: `The expirience of creating a landing webpage using layouts from Figma. It serves as an example
	// 	 of an adaptive and cross-browser website. (HTML5/CSS3/JavaScript/Figma )`,
	//   image: imageProject3,
	//   gitUrl: 'https://github.com/AnnaBilokon/barbershop-Figma-/',
	//   previewUrl: 'https://16uth.csb.app/',
	// },

  ]
  