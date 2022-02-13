import React, { useState } from 'react';

import RequestaccessView from './Requestaccess.view';

const Requestaccess = (props) => {
	const [fullnameState, setFullnameState] = useState('');
	const [companyState, setCompanyState] = useState('');
	const [positionState, setPositionState] = useState('');
	const [phoneState, setPhoneState] = useState(null);
	const [emailState, setEmailState] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [errorState, setErrorState] = useState(false);
	const [showPasswordState, setShowPasswordState] = useState(false);

	// const history = useHistory();

	const showPasswordChangeHandler = () => setShowPasswordState(!showPasswordState);

	const fullnameChangeHandler = (fullname) => setFullnameState(fullname.target.value);
	const companyChangeHandler = (company) => setCompanyEmailState(company.target.value);
	const positionChangeHandler = (position) => setPositionState(position.target.value);
	const phoneChangeHandler = (phone) => setPhoneState(phone.target.value);
	const emailChangeHandler = (email) => setEmailState(email.target.value);
	const passwordChangeHandler = (password) => setPasswordState(password.target.value);

	const submitHandler = (e) => {
		e.preventDefault();

		backendAPIAxios
			.post('/auth/requestAccess', {
				fullname: fullnameState,
				company: companyState,
				position: positionState,
				phone: phoneState,
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
				alert(`Failed to request access with error: ${e}`);
			});
	};
	return (
		<RequestaccessView
			fullname={fullnameState}
			company={companyState}
			position={positionState}
			phone={phoneState}
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
		</RequestaccessView>
	);
};

Requestaccess.displayName = 'Requestaccess';
Requestaccess.defaultProps = {};

export default React.memo(Requestaccess);
