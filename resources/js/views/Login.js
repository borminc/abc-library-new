import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

import { setCookie, getCookie } from '../functions/cookies';
import { Loading, LoadingButton } from '../components/Loading';
import { loginUser } from '../functions/loginFunction';
import MessageAlert from '../components/MessageAlert';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [isProcessing, setProcessing] = useState(false);

	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [errors, setErrors] = useState({
		email: false,
		password: false,
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

	const submitHandler = () => {
		setProcessing(true);
		setMsg({ text: '', success: 0 });

		if (!validator.isEmail(email)) {
			setErrors({ ...errors, email: true });
			setProcessing(false);
			return;
		} else if (password === '') {
			setErrors({ ...errors, password: true });
			setProcessing(false);
			return;
		}

		const loginInfo = {
			email: email,
			password: password,
			remember_me: rememberMe,
		};

		axios
			.post('/api/auth/login', loginInfo)
			.then(res => {
				setCookie('token', res.data.access_token);
				location.href = '/';
			})
			.catch(err => {
				// Invalid credentials
				// console.log(err);
				setMsg({ text: 'Invalid email or password', success: 0 });
				setCookie('token', '');
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
									<h3 className='mb-4'>Sign In</h3>
								</div>
							</div>

							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}

							<form>
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
											setErrors({ ...errors, email: false });
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
								<div className='form-group'>
									{isProcessing ? (
										<LoadingButton />
									) : (
										<button
											type='button'
											className={
												'form-control btn btn-primary rounded submit px-3' +
												(errors.email || errors.password ? ' disabled' : '')
											}
											onClick={submitHandler}
										>
											Sign In
										</button>
									)}
								</div>
								<div className='form-group d-md-flex mt-3 align-items-center'>
									<input
										type='checkbox'
										id='checkbox'
										onChange={e => setRememberMe(e.target.checked)}
									/>
									<label htmlFor='checkbox' className='text-left'>
										Remember Me
									</label>
									{/* <div className="w-50 text-md-right">
											<a href="#">Forgot Password</a>
										</div> */}
								</div>
							</form>
							<p className='mt-5 text-center'>
								Don't have an account? &ensp;
								<a href='/register'>Register</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

{
	/* <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button
                    type="button"
                    onClick={submitHandler}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form> */
}
