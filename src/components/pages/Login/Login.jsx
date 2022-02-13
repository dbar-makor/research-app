import React, { useState } from 'react';

import LoginView from './Login.view';

const Login = (props) => {
	const [emailState, setEmailState] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [errorState, setErrorState] = useState(false);
	const [showPasswordState, setShowPasswordState] = useState(false);

	// const history = useHistory();

	const showPasswordChangeHandler = () => setShowPasswordState(!showPasswordState);
	const emailChangeHandler = (email) => setEmailState(email.target.value);
	const passwordChangeHandler = (password) => setPasswordState(password.target.value);

	const submitHandler = (e) => {
		e.preventDefault();

		backendAPIAxios
			.post('/auth/login', {
				email: emailState,
				password: passwordState,
			})
			.then((response) => {
				sessionStorage.setItem('token', response.data.data.token);
				backendAPIAxios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.data.token;
				// history.push('/');
			})
			.catch((e) => {
				setErrorState(() => true);
				alert(`Failed to auth with error: ${e}`);
			});
	};
	return (
		<LoginView
			username={emailState}
			password={passwordState}
			showPassword={showPasswordState}
			usernameChangeHandler={emailChangeHandler}
			passwordChangeHandler={passwordChangeHandler}
			showPasswordChangeHandler={showPasswordChangeHandler}
			submitHandler={submitHandler}
			error={errorState}
		>
			{props}
		</LoginView>
	);
};

Login.displayName = 'Login';
Login.defaultProps = {};

export default React.memo(Login);
