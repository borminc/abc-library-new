import axios from '../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import { setCookie, getCookie, deleteCookie } from '../functions/cookies';

const NotFound = () => {
	const history = useHistory();
	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<div className='text-center p-5 mt-5' style={{ marginBottom: '10vh' }}>
				<img
					src={'/img/not-found.jpg'}
					style={{ width: '25rem', maxWidth: '100%' }}
					alt='not-found'
				/>
				<div className='display-6'>Not Found</div>
			</div>
			<button
				className='btn btn-primary w-25'
				onClick={() => history.push('/')}
			>
				Go back home
			</button>
		</div>
	);
};

export default NotFound;
