import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import { setCookie, getCookie, deleteCookie } from '../functions/cookies';
import { Loading } from './Loading';

const AdminRoute = props => {
	const [loginStatus, setLoginStatus] = useState(0);
	// -2=unauthorized; -1=not logged in; 0=loading; 1=logged in

	useEffect(() => {
		axios
			.get('/api/auth/user')
			.then(res => {
				if (res.data.is_admin) {
					setLoginStatus(1);
				} else {
					setLoginStatus(-2);
				}
			})
			.catch(err => {
				if (
					err.response.status == 403 ||
					err.response.data.message === 'Your email address is not verified.'
				) {
					setLoginStatus(-3);
				} else {
					deleteCookie('token');
					setLoginStatus(-1);
				}
			});
	}, []);

	if (!getCookie('token')) {
		return <Redirect push to='/login' />;
	}

	switch (loginStatus) {
		case 0:
			return <Loading />;
		case 1:
			return <div> {props.component} </div>;
		case -1:
			return <Redirect push to='/login' />;
		case -2:
			return <Redirect push to='/unauthorized' />;
		case -3:
			return <Redirect push to='/verify-email' />;
	}
};

export default AdminRoute;
