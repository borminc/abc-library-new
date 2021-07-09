import axios from './../../../functions/axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import ReactDOM from 'react-dom';
import { useHistory, Link } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from './../../../functions/cookies';
import MessageAlert from './../../../components/MessageAlert';
import { Loading, LoadingButton } from './../../../components/Loading';

const ChangePassword = props => {
    const history = useHistory();
    const [user, setUser] = [props.user, props.setUser];
    const [old_password, setOldPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [isProcessing, setProcessing] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
    const [errors, setErrors] = useState({
		new_password: false,
		confirmNewPassword: false,
		old_password: false
	});
    const hasInputErrors = () => {
		return (
            errors.old_password ||
			errors.confirmNewPassword ||
            errors.new_password ||
			confirmNewPassword == '' || 
            new_password == '' ||
            old_password == ''
		);
	};

    const changePasswordHandler = () => {
		setProcessing(true);
		setMsg({ text: '', success: 0 });
		if (hasInputErrors()) {
			setProcessing(false);
			return;
		}
		const changePasswordInfo = {
			old_password: old_password,
			confirmNewPassword: confirmNewPassword,
            new_password: new_password,
		};
		axios
			.post('/api/user/change-password', changePasswordInfo)
			.then(res => {
				setCookie('token', res.data.access_token);
				setUser(res.data.user);
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
        <div style={{ padding: '5% 5%' }}>
			<div className='row justify-content-center'>
				<div className='col-md-12 col-lg-10'>
					<div className='wrap d-md-flex'>
						<div className='p-4 p-md-5 w-100'>
							<div className='d-flex'>
								<div className='w-100'>
									<h2 className='mb-4'>Change Password</h2>
								</div>
							</div>

							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}

							<form>
								<div className='form-group mb-3'>
									<input
										id='old-password'
										type='password'
										className={
											'form-control' + (errors.old_password ? ' is-invalid' : '')
										}
										placeholder='Old Password'
										onChange={e => {
											setOldPassword(e.target.value);
											console.log(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value === '' )
												setErrors({ ...errors, old_password: true });
											else setErrors({ ...errors, old_password: false });
										}}
										required
									/>
									{errors.old_password && (
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
											'form-control' +
											(errors.new_password ? ' is-invalid' : '')
										}
										placeholder='New password'
										onChange={e => {
											setNewPassword(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value === '') {
												setErrors({ ...errors, new_password: true });}
											else setErrors({ ...errors, new_password: false });
										}}
										required
									/>
									{errors.new_password && (
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
										placeholder='Confirm New password'
										onChange={e => {
											setConfirmNewPassword(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value != new_password) {
												setErrors({ ...errors, confirmNewPassword: true });
                                                console.log(confirmNewPassword);}
											else setErrors({ ...errors, confirmNewPassword: false });
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
										<LoadingButton />
									) : (
										<button
											type='button'
											className={
												'form-control btn btn-primary rounded submit px-3' +
												(hasInputErrors() ? ' disabled' : '')
											}
											onClick={changePasswordHandler}
										>
											Change Password
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}
export default ChangePassword;
