import styled from 'styled-components';
import React from 'react';
import App from '../App';

const h1 = styled.div`
	font-size: 600px;
`;
const h2 = styled.div``;

const HeroSection = () => {
	return (
		<div>
			<h1>My Portfolio</h1>
			<p>
				Hi, my name is Cory Dixon,<br></br> I am a full-stack web developer
				based in<br></br> Kitchener-Waterloo, Ontario, Canada!
			</p>
			{/* <ImageContainer>
		 <ProfileImage src='/profile.png' alt='Profile' />
		 </ImageContainer> */}
		</div>
	);
};

export default HeroSection;
