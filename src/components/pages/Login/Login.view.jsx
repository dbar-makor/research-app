import React from 'react';

import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import pic from '../../../assets/pic.webp';

import classes from './Login.module.scss';

const LoginView = (props) => {
	return (
		<div className={classes['outerContainer']}>
			<div className={classes['innerContainer']}>
				<img className={classes['innerContainer__img']} src={pic} alt={pic} />
				<form className={classes['form']} onSubmit={props.submitHandler}>
					<h1 className={classes['form__header']}>Log In</h1>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<MailOutlineIcon style={{ position: 'absolute', right: 15.5, top: 15, width: 30, height: 30 }} />
						<TextField
							label="Email"
							variant="outlined"
							className={classes['form__input']}
							value={props.email}
							onChange={props.emailChangeHandler}
							type="email"
						></TextField>
					</div>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						{props.showPassword ? (
							<VisibilityIcon
								style={{
									position: 'absolute',
									right: 15,
									top: 15,
									width: 30,
									height: 30,
									cursor: 'pointer',
									zIndex: 2,
								}}
								onClick={props.showPasswordChangeHandler}
							/>
						) : (
							<VisibilityOffIcon
								style={{
									position: 'absolute',
									right: 15,
									top: 15,
									width: 30,
									height: 30,
									cursor: 'pointer',
									zIndex: 2,
								}}
								onClick={props.showPasswordChangeHandler}
							/>
						)}
						<TextField
							label="Password"
							variant="outlined"
							className={classes['form__input']}
							value={props.password}
							onChange={props.passwordChangeHandler}
							type={props.showPassword ? 'text' : 'password'}
						></TextField>
					</div>
					<div className={classes['form__section']}>
						<FormControlLabel control={<Checkbox />} label="Remeber Me" />
						<a>Forgot your password?</a>
					</div>
					<Button className={classes['form__button']} type="button" variant="contained" onClick={props.submitHandler}>
						Log In
					</Button>
					<h3>Not a mamber of Makor Group Research</h3>
					<a className={classes['form__request']}>Request an access</a>
					{props.error === true && <span className={classes['form__error']}>Wrong email or pasword</span>}
				</form>
			</div>
		</div>
	);
};

LoginView.displayName = 'LoginView';
LoginView.defaultProps = {};

export default React.memo(LoginView);
