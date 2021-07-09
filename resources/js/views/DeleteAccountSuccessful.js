import axios from '../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import MessageAlert from '../components/MessageAlert';
import { LoadingButton } from '../components/Loading';
import PrivateRoute from '../components/PrivateRoute';

import { setCookie, getCookie, deleteCookie } from '../functions/cookies';

const DeleteAccountSuccessful = () => {
	const history = useHistory();

	useEffect(() => {
		if (!getCookie('delete-account-success')) {
			history.push('/');
		}

		return () => {
			deleteCookie('delete-account-success');
		};
	}, []);

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center align-items-center text-center p-3 mt-5 mb-3'>
				<img
					className='mb-5'
					src={'/img/delete-user.svg'}
					style={{ width: '15rem', maxWidth: '100%', opacity: '50%' }}
					alt='deleted-user'
				/>
				<div className='display-6'>Your account has been deleted!</div>
				<p className='mt-3'>It's sad to see you go. Keep reading!</p>
			</div>

			<button
				className='btn btn-primary mb-5'
				onClick={() => {
					deleteCookie('delete-account-success');
					location.href = '/';
				}}
			>
				Go back home
			</button>
		</div>
	);
};

export default DeleteAccountSuccessful;
