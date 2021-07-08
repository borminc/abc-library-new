import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';

import { setCookie, getCookie, deleteCookie } from './../functions/cookies';
import { Loading } from './Loading';

const PrivateRoute = props => {
	const [loginStatus, setLoginStatus] = useState(0); // -2=verify email; -1=not logged in; 0=loading; 1=logged in

	useEffect(() => {
		axios
			.get('/api/auth/user')
			.then(res => {
				setLoginStatus(1);
			})
			.catch(err => {
				if (
					err.response.status == 403 ||
					err.response.data.message === 'Your email address is not verified.'
				) {
					setLoginStatus(-2);
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
			return <Redirect push to='/verify-email' />;
	}
};

export default PrivateRoute;
