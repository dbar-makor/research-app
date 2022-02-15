import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import pic from '../../../assets/pic.webp';

import classes from './Requestaccess.module.scss';

const RequestaccessView = (props) => {
	return (
		<div className={classes['outerContainer']}>
			<div className={classes['innerContainer']}>
				<form className={classes['form']} onSubmit={props.submitHandler}>
					<h1 className={classes['form__header']}>Request an access</h1>
					<TextField
						label="Fullname"
						variant="outlined"
						className={classes['form__input']}
						value={props.fullname}
						onChange={props.fullnameChangeHandler}
						type="text"
						error={!!props.fullanmeError}
						helperText={props.fullnameError}
					></TextField>
					<TextField
						label="Company"
						variant="outlined"
						className={classes['form__input']}
						value={props.company}
						onChange={props.companyChangeHandler}
						type="text"
					></TextField>
					<TextField
						label="Position"
						variant="outlined"
						className={classes['form__input']}
						value={props.position}
						onChange={props.positionChangeHandler}
						type="text"
					></TextField>
					<PhoneInput
						inputStyle={{ width: '38.5rem', height: '57px', color: 'grey' }}
						containerStyle={{ color: 'grey' }}
						className={classes['form__phoneInput']}
						country={'us'}
						value={props.phone}
						onChange={props.phoneChangeHandler}
						isValid={(value, country) => {
							if (value.match(/12345/)) {
								return 'Invalid value: ' + value + ', ' + country.name;
							} else if (value.match(/1234/)) {
								return false;
							} else {
								return true;
							}
						}}
					/>
					<TextField
						label="Email"
						variant="outlined"
						className={classes['form__input']}
						value={props.email}
						onChange={props.emailChangeHandler}
						type="email"
						error={!!props.emailError}
						helperText={props.emailError}
					></TextField>
					<TextField
						label="Password"
						variant="outlined"
						className={classes['form__input']}
						value={props.password}
						onChange={props.passwordChangeHandler}
						type="password"
						error={!!props.passwordError}
						helperText={props.passwordError}
					></TextField>
					<h4 className={classes['form__section']}>
						By clicking this button, you agree to Makor Group Research&apos;s&nbsp;
						<a style={{ color: '#0d6efd' }}>Terms and conditions</a>
					</h4>
					<Button className={classes['form__button']} type="button" variant="contained" onClick={props.submitHandler}>
						Register
					</Button>
					<h3>Already have an accout?</h3>
					<Link to="/login" className={classes['form__login']}>
						Log In
					</Link>
					{props.error === true && <span className={classes['form__error']}>Wrong email or pasword</span>}
				</form>
				<img className={classes['innerContainer__img']} src={pic} alt={pic} />
			</div>
		</div>
	);
};

RequestaccessView.displayName = 'RequestaccessView';
RequestaccessView.defaultProps = {};

export default React.memo(RequestaccessView);
