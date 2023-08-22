import styled from 'styled-components';
import React from 'react';

const h1 = styled.div`
	font-size: 600px;
	font-family: copperplate;
`;

const p = styled.div`
	font-family: copperplate;
	font-weight: bolder;
`;

const ProfileImage = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 50%;
	object-fit: cover;
`;

const HeroSection = () => {
	return (
		<div id='HeroSection'>
			<h1>My Portfolio</h1>
			<p>
				Hi, my name is Cory Dixon,<br></br> I am a full-stack web developer
				based in<br></br> Kitchener-Waterloo, Ontario, Canada!
			</p>
			<ProfileImage src='/profile.jpg' />
		</div>
	);
};

export default HeroSection;
