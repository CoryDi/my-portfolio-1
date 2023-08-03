import styled from 'styled-components';
import React from 'react';
import App from '../App';

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 600px;
	background-color: gray;
`;

const LogoImage = styled.img`
	height: 80px;
	width: 80px;
`;

const AboutMe = () => {
	return (
		<div>
			<h2>
				I'm a family man, that enjoys music, sports and all things tech. Being a
				web dev is intriguing to me because you are always learning to be at the
				top of your game.
			</h2>
			<h3>I have coding knowledge in the following</h3>
			<ImageContainer>
				<LogoImage src='/logo.png' alt='HTML' />
				<LogoImage src='/logo1.png' alt='CSS' />
				<LogoImage src='/logo2.png' alt='JavaScript' />
				<LogoImage src='/logo3.png' alt='React' />
				<LogoImage src='/logo4.png' alt='Node' />
				<LogoImage src='/logo5.png' alt='VSCode' />
				<LogoImage src='/logo6.png' alt='MongoDB' />
			</ImageContainer>
		</div>
	);
};

export default AboutMe;
