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

const ChangePassword = props => {
	const [oldPassword, setOldPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [isProcessing, setProcessing] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [errors, setErrors] = useState({
		newPassword: false,
		confirmNewPassword: false,
		oldPassword: false,
	});

	const hasInputErrors = () => {
		return (
			errors.oldPassword ||
			errors.confirmNewPassword ||
			errors.newPassword ||
			confirmNewPassword == '' ||
			newPassword == '' ||
			oldPassword == ''
		);
	};

	const changePasswordHandler = e => {
		e.preventDefault();
		setProcessing(true);
		setMsg({ text: '', success: 0 });

		if (hasInputErrors()) {
			setProcessing(false);
			return;
		}

		const changePasswordInfo = {
			old_password: oldPassword,
			new_password: newPassword,
			confirm_password: confirmNewPassword,
		};

		axios
			.post('/api/user/change-password', changePasswordInfo)
			.then(res => {
				setMsg({
					text: res.data.message,
					success: 1,
				});
			})
			.catch(err => {
				setMsg({
					text: err.response.data.error,
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>Change Password</h4>
			</div>

			<div className='col-12 col-lg-6 pl-0'>
				{msg && msg.text && (
					<MessageAlert msg={msg.text} success={msg.success} />
				)}
				<form>
					<div className='form-group mb-3'>
						<input
							id='old-password'
							type='password'
							className={
								'form-control' + (errors.oldPassword ? ' is-invalid' : '')
							}
							placeholder='Current password'
							onChange={e => {
								setOldPassword(e.target.value);
								setMsg({ text: '', success: 0 });
								if (e.target.value === '')
									setErrors({ ...errors, oldPassword: true });
								else setErrors({ ...errors, oldPassword: false });
							}}
							required
						/>
						{errors.oldPassword && (
							<small className='form-text text-danger'>
								Password cannot be empty.
							</small>
						)}
					</div>
					<div className='form-group mb-3'>
						<input
							id='new-password'
							type='password'
							className={
								'form-control' + (errors.newPassword ? ' is-invalid' : '')
							}
							placeholder='New password'
							onChange={e => {
								setNewPassword(e.target.value);
								setMsg({ text: '', success: 0 });
								if (e.target.value === '') {
									setErrors({ ...errors, newPassword: true });
								} else setErrors({ ...errors, newPassword: false });
							}}
							required
						/>
						{errors.newPassword && (
							<small className='form-text text-danger'>
								This field is required
							</small>
						)}
					</div>
					<div className='form-group mb-3'>
						<input
							id='confirm-new-password'
							type='password'
							className={
								'form-control' +
								(errors.confirmNewPassword ? ' is-invalid' : '')
							}
							placeholder='Confirm new password'
							onChange={e => {
								setConfirmNewPassword(e.target.value);
								setMsg({ text: '', success: 0 });
								if (e.target.value != newPassword) {
									setErrors({ ...errors, confirmNewPassword: true });
								} else setErrors({ ...errors, confirmNewPassword: false });
							}}
							required
						/>
						{errors.confirmNewPassword && (
							<small className='form-text text-danger'>
								Password does not match.
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
								className='btn btn-outline-primary'
								disabled={hasInputErrors()}
								onClick={changePasswordHandler}
							>
								Change Password
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
export default ChangePassword;
