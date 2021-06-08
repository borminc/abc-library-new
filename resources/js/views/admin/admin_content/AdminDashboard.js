import axios from '../../../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import { setCookie, getCookie, deleteCookie } from '../../../functions/cookies';
import '../imports/sb-admin-2.min.css';
import '../imports/sb-admin-2.js';
import '../imports/sb-admin-2.min.js';

const AdminDashboard = () => {
	const history = useHistory();

	return (
		<div id='page-top'>
			<h1 className='h3 mb-4 text-gray-800'>Dashboard</h1>
			{/* Topbar Search */}
			<form
				className='d-none d-sm-inline-block
					form-inline
					mr-auto
					ml-md-3
					my-2 my-md-0
					mw-100
					navbar-search'
			>
				<div className='input-group'>
					<input
						type='text'
						className='form-control bg-light border-0 small'
						placeholder='Search for...'
						aria-label='Search'
						aria-describedby='basic-addon2'
					/>
					<div className='input-group-append'>
						<button className='btn btn-primary' type='button'>
							<i className='fas fa-search fa-sm'></i>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AdminDashboard;
