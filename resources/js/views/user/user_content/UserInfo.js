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

const UserInfo = props => {
	const history = useHistory();
	const [user, setUser] = [props.user, props.setUser];
	const [needsToVerifyAcc, setNeedsToVerifyAcc] = [
		props.needsToVerifyAcc,
		props.setNeedsToVerifyAcc,
	];

	const [name, setName] = useState(user.name);
	const [phone, setPhone] = useState(user.phone);

	const [isProcessing, setProcessing] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [errors, setErrors] = useState({
		name: false,
		phone: false,
	});

	useEffect(() => {
		setName(user.name);
		setPhone(user.phone);
	}, [user]);

	const hasInputErrors = () => {
		return errors.name || errors.phone || name == '' || phone == '';
	};

	const changeInfoHandler = e => {
		e.preventDefault();
		setProcessing(true);
		setMsg({ text: '', success: 0 });

		if (hasInputErrors()) {
			setProcessing(false);
			return;
		}

		const info = {
			name: name,
			phone: phone,
		};

		axios
			.post('/api/user/change-info', info)
			.then(res => {
				setMsg({
					text: res.data.message,
					success: 1,
				});
				setUser({ ...user, name: name, phone: phone });
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
				<h4 className='col-lg-4'> User Information</h4>
			</div>
			<p>
				You can make changes to your information below. Note that name changes
				will be reflected even in past logs.
			</p>

			<div className='col-12 col-lg-6 pl-0'>
				{msg && msg.text && (
					<MessageAlert msg={msg.text} success={msg.success} />
				)}

				<form>
					<div className='form-group mb-3'>
						<small>Name</small>
						<input
							id='name'
							type='text'
							className={'form-control' + (errors.name ? ' is-invalid' : '')}
							value={name || ''}
							placeholder='Name...'
							onChange={e => {
								setName(e.target.value);
								setMsg({ text: '', success: 0 });
								if (e.target.value === '') setErrors({ ...errors, name: true });
								else setErrors({ ...errors, name: false });
							}}
							required
						/>
						{errors.name && (
							<small className='form-text text-danger'>
								Name cannot be empty.
							</small>
						)}
					</div>
					<div className='form-group mb-3'>
						<small>Phone</small>
						<input
							id='phone'
							type='text'
							className={'form-control' + (errors.phone ? ' is-invalid' : '')}
							value={phone || ''}
							placeholder='Phone...'
							onChange={e => {
								setPhone(e.target.value);
								setMsg({ text: '', success: 0 });
								if (e.target.value === '' || isNaN(e.target.value)) {
									setErrors({ ...errors, phone: true });
								} else setErrors({ ...errors, phone: false });
							}}
							required
						/>
						{errors.phone && (
							<small className='form-text text-danger'>
								Enter a valid phone number.
							</small>
						)}
					</div>
					<div className='form-group'>
						{(name !== user.name || phone !== user.phone) && (
							<button
								type='button'
								className='btn btn-outline-secondary mr-2 mb-2'
								onClick={() => {
									setName(user.name);
									setPhone(user.phone);
									setErrors({ name: false, phone: false });
								}}
							>
								Cancel
							</button>
						)}
						{isProcessing ? (
							<span className='btn mr-2 mb-2 p-0' style={{ width: '90px' }}>
								<LoadingButton />
							</span>
						) : (
							<button
								type='submit'
								className='btn btn-outline-primary mr-2 mb-2'
								disabled={
									hasInputErrors() || (name == user.name && phone == user.phone)
								}
								onClick={changeInfoHandler}
							>
								Save
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserInfo;
