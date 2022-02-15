import React, { useState } from 'react';

import LoginView from './Login.view';

const Login = (props) => {
	const emailRegex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const [emailState, setEmailState] = useState('');
	const [emailErrorState, setEmailErrorState] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [passwordErrorState, setPasswordErrorState] = useState('');
	const [showPasswordState, setShowPasswordState] = useState(false);

	const showPasswordChangeHandler = () => setShowPasswordState(!showPasswordState);
	const emailChangeHandler = (email) => setEmailState(email.target.value);
	const passwordChangeHandler = (password) => setPasswordState(password.target.value);

	const submitHandler = (e) => {
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

		// backendAPIAxios
		// 	.post('/auth/login', {
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
		// 		alert(`Failed to auth with error: ${e}`);
		// 	});
	};
	return (
		<LoginView
			email={emailState}
			emailError={emailErrorState}
			password={passwordState}
			passwordError={passwordErrorState}
			showPassword={showPasswordState}
			emailChangeHandler={emailChangeHandler}
			passwordChangeHandler={passwordChangeHandler}
			showPasswordChangeHandler={showPasswordChangeHandler}
			submitHandler={submitHandler}
		>
			{props.children}
		</LoginView>
	);
};

Login.displayName = 'Login';
Login.defaultProps = {};

export default React.memo(Login);
