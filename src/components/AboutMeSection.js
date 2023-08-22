import styled from 'styled-components';
import React from 'react';

const AboutMeSection = () => {
	return (
		<div id='AboutMeSection'>
			<T>About Me</T>
			<P1>
				I'm a family man, that enjoys music, sports and all things tech. Being a
				web dev is intriguing to me because you are always learning to be at the
				top of your game. I enjoy working alone and in group settings alike. I
				am currently enrolled in the Concordia University Web Dev Diploma
				program and I'm hoping to leverage the skills to transition into an
				entry level full-stack development role.
			</P1>
			<P>My coding knowledge is in the following API's</P>
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

export default AboutMeSection;

const T = styled.h1`
	text-align: center;
	font-family: copperplate;
	padding-top: 9%;
`;
// need to fix the alignment
const P1 = styled.h3`
	text-align: center;
	font-family: copperplate;
	flex-direction: column;
	align-items: center;
	margin-left: 20%;
	margin-right: 20%;
`;

const P = styled.h2`
	text-align: center;
	font-family: copperplate;
	flex-direction: column;
	align-items: center;
	padding-top: 100px;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 1px;
`;

const LogoImage = styled.img`
	margin-top: 0px;
	height: 80px;
	width: 80px;
`;
