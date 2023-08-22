import styled from 'styled-components';
import React from 'react';

const HeroSection = () => {
	return (
		<div id='HeroSection'>
			<T>My Portfolio</T>
			<ProfileImage src='/profile.jpg' />
			<P>
				Hi, my name is Cory Dixon, I am a full-stack web developer based in
				Kitchener-Waterloo, Ontario, Canada!
			</P>
		</div>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const T = styled.h1`
	align-items: center;
	font-size: 100px;
	font-family: copperplate;
	text-align: center;
	padding-top: 0%;
`;

const P = styled.h2`
	align-items: center;
	font-family: copperplate;
	font-weight: bolder;
	text-align: center;
	padding-top: 6%;
	margin-left: 20%;
	margin-right: 20%;
`;

const ProfileImage = styled.img`
	align-items: center;
	height: 200px;
	width: 200px;
	padding-left: 41%;
	padding-top: 2%;
`;

export default HeroSection;
