import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMeSection';
import Projects from './components/ProjectsSection';
import Contacts from './components/ContactsSection';
import styled from 'styled-components';

const body = styled.div`
background-color: gray;
`

function App() {
	return (
		<body>
		<div className='App'>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path='/' element={<HeroSection />} />
					<Route path='/about' element={<AboutMe />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='contacts' element={<Contacts />} />
				</Routes>
			</BrowserRouter>
			</div>
			</body>
	);
}

export default App;
