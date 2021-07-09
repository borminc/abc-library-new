import axios from '../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import MessageAlert from '../components/MessageAlert';
import { Loading, LoadingButton } from '../components/Loading';

import { setCookie, getCookie, deleteCookie } from '../functions/cookies';

const VerifiyEmail = props => {
	const history = useHistory();
	const [user, setUser] = [props.user, props.setUser];
	const [msg, setMsg] = useState({ text: '', success: 1 });
	const [isSending, setSending] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (getCookie('token')) {
			setLoading(true);
			axios
				.get('/api/auth/user')
				.then(res => {
					// already verified
					setUser(res.data);
					history.push('/verify-email-success');
				})
				.catch(err => {
					if (
						!(
							err.response.status == 403 ||
							err.response.data.message ===
								'Your email address is not verified.'
						)
					) {
						deleteCookie('token');
						setUser(null);
						history.push('/');
					} else {
						setLoading(false);
					}
				});
		} else {
			setUser(null);
			history.push('/');
		}
	}, []);

	const resendEmailHandler = () => {
		setSending(true);
		setMsg({ text: '', success: 0 });
		axios
			.get('/api/email/resend')
			.then(res => {
				setMsg({ text: res.data.message, success: 1 });
			})
			.catch(err => {
				console.log(err.response);
				setMsg({ text: 'There was a problem: ' + err.response, success: 0 });
			})
			.finally(() => {
				setSending(false);
			});
	};

	if (isLoading) return <Loading />;

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center align-items-center text-center p-3 mt-5 mb-3'>
				<img
					className='mb-5'
					src={'/img/email.svg'}
					style={{ width: '13rem', maxWidth: '100%', opacity: '50%' }}
					alt='email'
				/>
				<div className='display-6'>Verifiy your email address to continue.</div>
				<p className='mt-3'>
					We need to prove that the email you used is real. It won't take more
					than 5 seconds. Just click on the link sent to the email you
					registered with.
				</p>
			</div>

			{msg && msg.text && <MessageAlert msg={msg.text} success={msg.success} />}

			{isSending ? (
				<span className='btn p-0 w-25 mb-5'>
					<LoadingButton />
				</span>
			) : (
				<button className='btn btn-primary mb-5' onClick={resendEmailHandler}>
					Resend email verification
				</button>
			)}
		</div>
	);
};

export default VerifiyEmail;
