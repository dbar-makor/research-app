import React from 'react';

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
					<div>
						<TextField
							label="Fullname"
							variant="outlined"
							className={classes['form__input']}
							value={props.fullname}
							onChange={props.fullnameChangeHandler}
							type="text"
						></TextField>
					</div>
					<div>
						<TextField
							label="Company"
							variant="outlined"
							className={classes['form__input']}
							value={props.company}
							onChange={props.companyChangeHandler}
							type="text"
						></TextField>
					</div>
					<div>
						<TextField
							label="Position"
							variant="outlined"
							className={classes['form__input']}
							value={props.position}
							onChange={props.positionChangeHandler}
							type="text"
						></TextField>
					</div>
					<PhoneInput
						className={classes['form__phoneInput']}
						country={'us'}
						value={props.phone}
						onChange={props.phoneChangeHandler}
						inputStyle={{ width: '38.5rem', height: '57px', color: 'grey' }}
						containerStyle={{ color: 'grey' }}
					/>
					<div>
						<TextField
							label="Email"
							variant="outlined"
							className={classes['form__input']}
							value={props.email}
							onChange={props.emailChangeHandler}
							type="email"
						></TextField>
					</div>
					<div>
						<TextField
							label="Password"
							variant="outlined"
							className={classes['form__input']}
							value={props.password}
							onChange={props.passwordChangeHandler}
							type={props.showPassword ? 'text' : 'password'}
						></TextField>
					</div>
					<h4 className={classes['form__section']}>
						By clicking this button, you agree to Makor Group Research&apos;s&nbsp;
						<a style={{ color: '#0d6efd' }}>Terms and conditions</a>
					</h4>
					<Button className={classes['form__button']} type="button" variant="contained" onClick={props.submitHandler}>
						Register
					</Button>
					<h3>Already have an accout?</h3>
					<a className={classes['form__login']}>Log In</a>
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
