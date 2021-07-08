import axios from '../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import MessageAlert from '../components/MessageAlert';
import { LoadingButton } from '../components/Loading';
import PrivateRoute from '../components/PrivateRoute';

import { setCookie, getCookie, deleteCookie } from '../functions/cookies';

const VerifyEmailSuccessful = () => {
	const history = useHistory();

	return (
		<PrivateRoute
			component={
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<div
						className='d-flex flex-column justify-content-center align-items-center text-center p-5 mt-5'
						style={{ marginBottom: '2vh' }}
					>
						<img
							className='mb-5'
							src={'/img/verify-user.svg'}
							style={{ width: '15rem', maxWidth: '100%', opacity: '50%' }}
							alt='verify-user'
						/>
						<div className='display-6'>Your account is verified!</div>
						<p className='mt-3 w-75'>
							Start browsing our library and find your next favorite book!
						</p>
					</div>

					<button
						className='btn btn-primary w-25 mt-5 mb-5'
						onClick={() => history.push('/')}
					>
						Start browsing
					</button>
				</div>
			}
		/>
	);
};

export default VerifyEmailSuccessful;
