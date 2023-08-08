import styled from 'styled-components';
import React from 'react';
import App from '../App';

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 500px;
	background-color: ;
`;

const LogoImage = styled.img`
	margin-top: 100px;
	height: 80px;
	width: 80px;
`;

const coding = styled.div`
	margin-top: 80px;
	text-align: justify;
	width: 60px;
	padding-top: 450px;
`;

// p.intro {

// }

const AboutMe = () => {
	return (
		<div>
			<h1 divClass='info'>About Me</h1>
			<p divClass='info'>
				I'm a family man, that enjoys music, sports and all things tech.
				<br></br>
				Being a web dev is intriguing to me because you are always learning to
				be at the top of your game.<br></br> I enjoy working alone and in group
				settings alike.<br></br> I am currently enrolled in the Concordia
				University Web Dev Diploma program<br></br> and I'm hoping to leverage
				the skills to transition into an entry level full-stack development
				role.
			</p>
			<h2 className='coding'>My coding knowledge is in the following API's</h2>
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
