import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// NavBar.css //
const NavBarContainer = styled.div`
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

const NavBar = () => {
	return (
		<div>
			<NavBarContainer>
				<Link to='/'>Home</Link>
				<Link to='/about'>About Me</Link>
				<Link to='/projects'>Projects</Link>
				<Link to='/contacts'>Contact</Link>
			</NavBarContainer>
		</div>
	);
};

//
export default NavBar;
