import styled from 'styled-components';
import App from '../App';

const h1 = styled.div`
	font-size: 600px;
`;
const h2 = styled.div``;

const HeroSection = () => {
	return (
		<div>
			<h1>My Portfolio</h1>;
			<h2>
				Hi, my name is Cory Dixon and I am a full-stack web developer based in
				Kitchener-Waterloo, Ontario, Canada!
			</h2>
		</div>
	);
};

export default HeroSection;
