import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

import { setCookie, getCookie } from '../functions/cookies';
import { Loading, LoadingButton } from '../components/Loading';
import { loginUser } from '../functions/loginFunction';
import MessageAlert from '../components/MessageAlert';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [isProcessing, setProcessing] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		password: false,
		confirmPassword: false,
	});

	useEffect(() => {
		if (getCookie('token')) {
			axios
				.get('/api/auth/user')
				.then(res => {
					// Authorized
					location.href = '/';
				})
				.catch(err => {
					// Unauthorized
					setCookie('token', '');
					location.reload();
				});
		}
	}, []);

	const hasInputErrors = () => {
		return (
			errors.name ||
			errors.email ||
			errors.password ||
			errors.confirmPassword ||
			name == '' ||
			email == '' ||
			password == '' ||
			confirmPassword == ''
		);
	};

	const submitHandler = () => {
		setProcessing(true);
		setMsg({ text: '', success: 0 });

		if (hasInputErrors()) {
			setProcessing(false);
			return;
		}

		const registerInfo = {
			name: name,
			email: email,
			password: password,
			password_confirmation: confirmPassword,
		};

		axios
			.post('/api/auth/register', registerInfo)
			.then(res => {
				console.log(res);
				loginUser(email, password);
			})
			.catch(err => {
				console.log(err);
				setMsg({
					text: 'There was an error creating your account. Try again later!',
					success: 0,
				});
				// setCookie("token", "");
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	return (
		<div style={{ padding: '8rem 0' }}>
			<div className='row justify-content-center'>
				<div className='col-md-12 col-lg-10'>
					<div className='wrap d-md-flex'>
						<div
							className='img'
							style={{
								backgroundImage: `url("/img/bg-books.jpg")`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								minWidth: '30vw',
							}}
						></div>

						<div className='p-4 p-md-5 w-100'>
							<div className='d-flex'>
								<div className='w-100'>
									<h3 className='mb-4'>Register</h3>
								</div>
							</div>

							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}

							<form>
								<div className='form-group mb-3'>
									<input
										id='name'
										type='text'
										className={
											'form-control' + (errors.name ? ' is-invalid' : '')
										}
										placeholder='Name'
										onChange={e => {
											setName(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value === '')
												setErrors({ ...errors, name: true });
											else setErrors({ ...errors, name: false });
										}}
										required
									/>

									{errors.name && (
										<small className='form-text text-danger'>
											This field is required.
										</small>
									)}
								</div>
								<div className='form-group mb-3'>
									<input
										id='email'
										type='email'
										className={
											'form-control' + (errors.email ? ' is-invalid' : '')
										}
										placeholder='Email'
										onChange={e => {
											setEmail(e.target.value);
											setMsg({ text: '', success: 0 });
											if (
												!validator.isEmail(e.target.value) &&
												e.target.value != ''
											)
												setErrors({ ...errors, email: true });
											else setErrors({ ...errors, email: false });
										}}
										required
									/>
									{errors.email && (
										<small className='form-text text-danger'>
											Enter a valid email.
										</small>
									)}
								</div>
								<div className='form-group mb-3'>
									<input
										id='password'
										type='password'
										className={
											'form-control' + (errors.password ? ' is-invalid' : '')
										}
										placeholder='Password'
										onChange={e => {
											setPassword(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value === '')
												setErrors({ ...errors, password: true });
											else setErrors({ ...errors, password: false });
										}}
										required
									/>
									{errors.password && (
										<small className='form-text text-danger'>
											This field is required.
										</small>
									)}
								</div>
								<div className='form-group mb-3'>
									<input
										id='confirm-password'
										type='password'
										className={
											'form-control' +
											(errors.confirmPassword ? ' is-invalid' : '')
										}
										placeholder='Confirm password'
										onChange={e => {
											setConfirmPassword(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value != password)
												setErrors({ ...errors, confirmPassword: true });
											else setErrors({ ...errors, confirmPassword: false });
										}}
										required
									/>
									{errors.confirmPassword && (
										<small className='form-text text-danger'>
											Password does not match.
										</small>
									)}
								</div>
								<div className='form-group'>
									{isProcessing ? (
										<LoadingButton />
									) : (
										<button
											type='button'
											className={
												'form-control btn btn-primary rounded submit px-3' +
												(hasInputErrors() ? ' disabled' : '')
											}
											onClick={submitHandler}
										>
											Create account
										</button>
									)}
								</div>
							</form>
							<p className='mt-5 text-center'>
								Already have an account? &ensp;
								<a href='/login'>Log in</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
