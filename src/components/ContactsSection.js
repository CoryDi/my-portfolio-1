import styled from 'styled-components';
import App from '../App';
import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// You can perform actions with the form data, such as sending it to a server or displaying it
		console.log(formData);
	};

	return (
		<div>
			<h2>Contact Form</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

const ContactsSection = () => {
	return (
		<div id='ContactsSection'>
			<ContactForm />
			<T>Contact Links</T>
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

const T = styled.h1`
	text-align: center;
	font-family: copperplate;
	padding-top: 420px;
`;

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`;

const ContactImage = styled.img`
	height: 40px;
	width: 40px;
	margin: 10px;
`;

export default ContactsSection;
