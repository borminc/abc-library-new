import axios from '../../../functions/axios';
import { hasIn, set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import MessageAlert from './../../../components/MessageAlert';
import { Loading, LoadingButton } from './../../../components/Loading';
import { deleteCookie, setCookie } from '../../../functions/cookies';

const DeleteAccount = props => {
	const history = useHistory();
	const [isProcessing, setProcessing] = useState(false);
	const [user, setUser] = [props.user, props.setUser];
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [password, setPassword] = useState('');
	const [passwordErr, setPasswordErr] = useState(false);

	const deleteAccountHandler = e => {
		e.preventDefault();
		if (password === '') {
			setMsg({ text: 'Password cannot be empty.', success: 0 });
			return;
		}
		setProcessing(true);
		var success = false;
		axios
			.post('/api/user/delete-account', { password: password })
			.then(res => {
				deleteCookie('token');
				setCookie('delete-account-success', true, 0.01);
				success = true;
			})
			.catch(err => {
				setMsg({
					text: err.response.data.error
						? err.response.data.error
						: 'There was a problem. Try again later.',
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
				if (success) {
					setUser(null);
					history.push('/delete-account-success');
				}
			});
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>Delete Account</h4>
			</div>
			<p className='text-danger'>
				Deleting your ABC Library account is an IRREVERSIBLE action. After you
				click delete, there will be no going back.
			</p>

			<div className='col-12 col-lg-6 pl-0'>
				{msg && msg.text && (
					<MessageAlert msg={msg.text} success={msg.success} />
				)}
				<form>
					<input
						type='password'
						className={'form-control mb-3' + (passwordErr ? ' is-invalid' : '')}
						id='password'
						value={password}
						placeholder='Password...'
						onChange={e => {
							if (e.target.value === '') setPasswordErr(true);
							else setPasswordErr(false);

							setPassword(e.target.value);
						}}
					/>

					{isProcessing ? (
						<span className='btn p-0' style={{ width: '90px' }}>
							<LoadingButton color='outline-danger' />
						</span>
					) : (
						<button
							type='submit'
							className='btn btn-outline-danger'
							onClick={deleteAccountHandler}
							disabled={passwordErr || password === ''}
						>
							Delete Account Now
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default DeleteAccount;
