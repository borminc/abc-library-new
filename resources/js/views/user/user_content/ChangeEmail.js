import axios from './../../../functions/axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import ReactDOM from 'react-dom';
import { useHistory, Link } from 'react-router-dom';
import {
	setCookie,
	getCookie,
	deleteCookie,
} from './../../../functions/cookies';
import MessageAlert from './../../../components/MessageAlert';
import { Loading, LoadingButton } from './../../../components/Loading';

const ChangeEmail = props => {
	const history = useHistory();
	const [user, setUser] = [props.user, props.setUser];
	const [needsToVerifyAcc, setNeedsToVerifyAcc] = [
		props.needsToVerifyAcc,
		props.setNeedsToVerifyAcc,
	];
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isProcessing, setProcessing] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [errors, setErrors] = useState({
		email: false,
		password: false,
	});

	const hasInputErrors = () => {
		return (
			errors.email ||
			errors.password ||
			email == '' ||
			!validator.isEmail(email) ||
			password == ''
		);
	};

	const changeEmailHandler = e => {
		e.preventDefault();
		setProcessing(true);
		setMsg({ text: '', success: 0 });

		if (hasInputErrors()) {
			setProcessing(false);
			return;
		}

		const changeEmailInfo = {
			email: email,
			password: password,
		};

		var success = false;
		axios
			.post('/api/user/change-email', changeEmailInfo)
			.then(res => {
				setMsg({
					text: res.data.message,
					success: 1,
				});
				success = true;
			})
			.catch(err => {
				setMsg({
					text: err.response.data.error,
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
				if (success) {
					setUser({ ...user, email: email });
					setNeedsToVerifyAcc({
						username: user.name,
						status: true,
					});
					history.push('/verify-email');
				}
			});
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>Change Email</h4>
			</div>
			<p>
				Changing your email will delete your current email from this account and
				the ABC Library system.{' '}
			</p>
			<p>
				<span className='text-danger'>This action is IRREVERSIBLE.</span> Once
				you have changed your email, your account cannot do anything until you
				verify your new email. A verification link will be sent.
			</p>

			<div className='col-12 col-lg-6 pl-0'>
				{msg && msg.text && (
					<MessageAlert msg={msg.text} success={msg.success} />
				)}
				<form>
					<div className='form-group mb-3'>
						<input
							id='email'
							type='email'
							className={'form-control' + (errors.email ? ' is-invalid' : '')}
							placeholder='New email'
							onChange={e => {
								setEmail(e.target.value);
								setMsg({ text: '', success: 0 });
								if (!validator.isEmail(e.target.value) && e.target.value != '')
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
							placeholder='Current password'
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
								Password cannot be empty.
							</small>
						)}
					</div>

					<div className='form-group'>
						{isProcessing ? (
							<span className='btn p-0' style={{ width: '90px' }}>
								<LoadingButton />
							</span>
						) : (
							<button
								type='submit'
								className='btn btn-primary'
								disabled={hasInputErrors()}
								onClick={changeEmailHandler}
							>
								Change Email
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
export default ChangeEmail;
