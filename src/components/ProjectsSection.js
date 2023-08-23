import styled from 'styled-components';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { item } from '../Data';

const Projects = () => {
	const itemList = Object.values(item);
	return (
		<GetContainer id='Projects'>
			<T>Projects</T>
			<ProjectsContainer>
				{itemList.map((item) => {
					return (
						<HashLink to={`/#Projects/${item.id}`}>
							<Package>
								<Image src={item.imageSrc} />
								<Title2>{item.name}</Title2>
								<Text>{item.description}</Text>
								<Text>{item.frameworks}</Text>
							</Package>
						</HashLink>
					);
				})}
			</ProjectsContainer>
		</GetContainer>
	);
};

const T = styled.h1`
	text-align: center;
	font-family: copperplate;
	padding-top: 150px;
`;

const GetContainer = styled.div``;

const ProjectsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
`;

const Package = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 400px;
	flex-direction: column;
`;

const Image = styled.img`
	height: 70%;
	width: 100%;
	object-fit: fill;
`;

const Title2 = styled.div``;

const Text = styled.div``;

export default Projects;
