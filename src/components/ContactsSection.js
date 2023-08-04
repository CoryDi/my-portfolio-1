import styled from 'styled-components';
import App from '../App';

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 800px;
`;

const ContactImage = styled.img`
	height: 40px;
	width: 40px;
	margin: 10px;
`;

const ContactsSection = () => {
	return (
		<div>
			<h2>Contact Links</h2>
			<ContactContainer>
				<ContactImage src='/phone.png' alt='Phone' />
				<ContactImage src='/linkedin.png' alt='Linkedin' />
				<ContactImage src='/mail.png' alt='Mail' />
				<ContactImage src='/instagram.png' alt='Instagram' />
				<ContactImage src='/facebook.png' alt='Facebook' />
			</ContactContainer>
		</div>
	);
};

export default ContactsSection;
