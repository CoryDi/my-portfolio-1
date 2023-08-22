import styled from 'styled-components';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
	return (
		<NavBarContainer>
			<HashLink to={'/#HeroSection'} style={linkStyle}>
				{' '}
				Home{' '}
			</HashLink>
			<HashLink to={'/#AboutMeSection'} style={linkStyle}>
				{' '}
				About Me{' '}
			</HashLink>
			<HashLink to={'/#ProjectsSection'} style={linkStyle}>
				{' '}
				Projects{' '}
			</HashLink>
			<HashLink to={'/#ContactsSection'} style={linkStyle}>
				{' '}
				Contacts{' '}
			</HashLink>
		</NavBarContainer>
	);
};

export default NavBar;

const NavBarContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: fixed;
	left: 0;
	padding: 20px;
	font-size: 30px;
	font-family: copperplate;
	font-weight: bolder;
	text-decoration: none;
`;

const linkStyle = {
	margin: '5px',
	textDecoration: 'none',
	color: 'black',
};
