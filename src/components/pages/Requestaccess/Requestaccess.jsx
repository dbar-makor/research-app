import React, { useState } from 'react';

import RequestaccessView from './Requestaccess.view';

const Requestaccess = (props) => {
	const emailRegex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const [fullnameState, setFullnameState] = useState('');
	const [fullnameErrorState, setFullnameErrorState] = useState('');
	const [companyState, setCompanyState] = useState('');
	const [positionState, setPositionState] = useState('');
	const [phoneState, setPhoneState] = useState('');
	const [emailState, setEmailState] = useState('');
	const [emailErrorState, setEmailErrorState] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [passwordErrorState, setPasswordErrorState] = useState('');

	const fullnameChangeHandler = (fullname) => setFullnameState(fullname.target.value);
	const companyChangeHandler = (company) => setCompanyEmailState(company.target.value);
	const positionChangeHandler = (position) => setPositionState(position.target.value);
	const phoneChangeHandler = (phone) => setPhoneState(phone);

	const emailChangeHandler = (email) => setEmailState(email.target.value);
	const passwordChangeHandler = (password) => setPasswordState(password.target.value);

	const submitHandler = (e) => {
		console.log(phoneState);
		e.preventDefault();

		if (!emailState.match(emailRegex)) {
			setEmailErrorState('Please provide a valid email');
		} else {
			setEmailErrorState('');
		}

		if (passwordState.length < 8) {
			setPasswordErrorState('Password must be 8 characters');
		} else {
			setPasswordErrorState('');
		}

		if (fullnameState.length < 8) {
			setPasswordErrorState('Password must be 8 characters');
		} else {
			setPasswordErrorState('');
		}

		// backendAPIAxios
		// 	.post('/auth/requestAccess', {
		// 		fullname: fullnameState,
		// 		company: companyState,
		// 		position: positionState,
		// 		phone: phoneState,
		// 		email: emailState,
		// 		password: passwordState,
		// 	})
		// 	.then((response) => {
		// 		sessionStorage.setItem('token', response.data.data.token);
		// 		backendAPIAxios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.data.token;
		// 		// history.push('/');
		// 	})
		// 	.catch((e) => {
		// 		setErrorState(() => true);
		// 		alert(`Failed to request access with error: ${e}`);
		// 	});
	};
	return (
		<RequestaccessView
			fullname={fullnameState}
			fullnameError={fullnameErrorState}
			company={companyState}
			position={positionState}
			phone={phoneState}
			email={emailState}
			emailError={emailErrorState}
			password={passwordState}
			passwordError={passwordErrorState}
			phoneChangeHandler={phoneChangeHandler}
			fullnameChangeHandler={fullnameChangeHandler}
			emailChangeHandler={emailChangeHandler}
			passwordChangeHandler={passwordChangeHandler}
			submitHandler={submitHandler}
		>
			{props.children}
		</RequestaccessView>
	);
};

Requestaccess.displayName = 'Requestaccess';
Requestaccess.defaultProps = {};

export default React.memo(Requestaccess);
