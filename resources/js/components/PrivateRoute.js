import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';

import { setCookie, getCookie, deleteCookie } from './../functions/cookies';
import { Loading } from './Loading';

const PrivateRoute = props => {
	const [loginStatus, setLoginStatus] = useState(0); // -1=not logged in; 0=loading; 1=logged in

	if (!getCookie('token')) {
		return <Redirect push to='/login' />;
	}

	useEffect(() => {
		axios
			.get('/api/auth/user')
			.then(res => {
				setLoginStatus(1);
			})
			.catch(err => {
				deleteCookie('token');
				setLoginStatus(-1);
			});
	}, []);

	switch (loginStatus) {
		case 0:
			return <Loading />;
		case 1:
			return <div> {props.component} </div>;
		case -1:
			return <Redirect push to='/login' />;
	}
};

export default PrivateRoute;
