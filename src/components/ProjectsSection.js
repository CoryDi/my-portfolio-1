import styled from 'styled-components';
import React from 'react';
// import { ProjectContainer, ProjectImage } from './public';

const Projects = () => {
	return (
		<div id='ProjectsSection'>
			<T>Here are some projects I have completed</T>
			{/* <ProjectContainer>
				<ProjectImage src='/fruit.jpeg' alt='fruit' />
				<ProjectImage src='/hangman.jpeg' alt='hangman' />
				<ProjectImage src='/signup.jpeg' alt='signup' />
				<ProjectImage src='/game.jpeg' alt='game' />
			</ProjectContainer> */}
		</div>
	);
};

// const ProjectContainer = styled.img`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	padding-top: 1px;
// `;

const T = styled.h1`
	text-align: center;
	font-family: copperplate;
	padding-top: 150px;
`;

export default Projects;
