import axios from '../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import { setCookie, getCookie, deleteCookie } from '../functions/cookies';

const Unauthorized = () => {
	const history = useHistory();
	return (
		<div>
			<div
				className='d-flex flex-column justify-content-center align-items-center'
				style={{ marginBottom: '10vh' }}
			>
				<div className='text-center p-5 mt-5'>
					<div className='display-6'>Unauthorized!</div>
				</div>
				<button
					className='btn btn-primary w-25'
					onClick={() => history.push('/')}
				>
					Go back home
				</button>
			</div>
		</div>
	);
};

export default Unauthorized;
