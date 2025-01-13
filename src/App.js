import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/Navbar.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import EmailSection from './components/EmailSection.jsx';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './ThemeContext.jsx';
import SkillsSection from './components/SkillsSection.jsx';


export default function Home() {
  return (
	<ThemeProvider>
	<main className="flex min-h-screen flex-col bg-[#ffffff] dark:bg-[#221c2b]">
	<Navbar/>
	<div className="container mt-24 mx-auto px-12 py-4">
	<HeroSection/>
	<AboutSection/>
	<SkillsSection/>
	<ProjectSection/>
	<EmailSection/>
	<Footer/>
	</div>
	</main>
	</ThemeProvider>
  )
}
