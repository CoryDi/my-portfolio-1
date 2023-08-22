import styled from 'styled-components';
import App from '../App';

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 500px;
`;

const ContactImage = styled.img`
	height: 40px;
	width: 40px;
	margin: 10px;
`;

const ContactsSection = () => {
	return (
		<div id='ContactsSection'>
			<h2>Contact Links</h2>
			<ContactContainer>
				<a href='tel:1(519)729-8519'>
					<ContactImage src='/phone.png' alt='Phone' />
				</a>
				<ContactImage src='/linkedin.png' alt='Linkedin' />
				<a href='mailto:Corydixon1@gmail.com'>
					<ContactImage src='/mail.png' alt='Mail' />
				</a>
				<ContactImage src='/instagram.png' alt='Instagram' />
				<ContactImage src='/facebook.png' alt='Facebook' />
			</ContactContainer>
		</div>
	);
};

export default ContactsSection;
