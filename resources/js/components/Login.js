import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { setCookie, getCookie } from './../functions/cookies';
import Loading from './Loading';
import { loginUser } from './../functions/loginFunction';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
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
		loginUser(email, password, rememberMe);
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
							<form>
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
