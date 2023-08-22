import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactsSection from './components/ContactsSection';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<HeroSection />
				<AboutMeSection />
				<ProjectsSection />
				<ContactsSection />
			</BrowserRouter>
		</div>
	);
}

export default App;
