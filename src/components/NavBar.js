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
	padding: 0px;
	font-size: 20px;
	font-family: ;
	font-weight: bolder;
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

// NavBar = styled.div`
//  	margin-bottom: 10px;
// 	text-decoration: none;
// 	 	color: #333;
// `;

export default NavBar;
