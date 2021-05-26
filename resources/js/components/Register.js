import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { setCookie, getCookie } from './../functions/cookies';
import { loginUser } from './../functions/loginFunction';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [isProcessing, setProcessing] = useState(false);

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

	const submitHandler = () => {
		setProcessing(true);
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
				// Invalid credentials
				setProcessing(false);
				console.log(err);
				// setCookie("token", "");
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
							<form>
								<div className='form-group mb-3'>
									<input
										id='text'
										type='text'
										className='form-control'
										placeholder='Name'
										onChange={e => setName(e.target.value)}
										required
									/>
								</div>
								<div className='form-group mb-3'>
									<input
										id='email'
										type='text'
										className='form-control'
										placeholder='Email'
										onChange={e => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className='form-group mb-3'>
									<input
										id='password'
										type='password'
										className='form-control'
										placeholder='Password'
										onChange={e => setPassword(e.target.value)}
										required
									/>
								</div>
								<div className='form-group mb-3'>
									<input
										id='confirm-password'
										type='password'
										className='form-control'
										placeholder='Confirm password'
										onChange={e => setConfirmPassword(e.target.value)}
										required
									/>
								</div>
								<div className='form-group'>
									{isProcessing ? (
										<button
											className='form-control btn btn-primary rounded submit px-3'
											type='button'
											disabled
										>
											<span
												className='spinner-border spinner-border-sm'
												role='status'
												aria-hidden='true'
											></span>
										</button>
									) : (
										<button
											type='button'
											className='form-control btn btn-primary rounded submit px-3'
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
