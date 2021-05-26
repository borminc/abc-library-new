import axios from 'axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { setCookie, getCookie } from '../functions/cookies';

const Home = () => {
	const [userInfo, setUserInfo] = useState();
	useEffect(() => {
		axios.get('/api/auth/user').then(res => {
			// console.log(res.data);
			setUserInfo(res.data);
		});
	}, []);

	const logoutHandler = () => {
		axios
			.get('/api/auth/logout')
			.then(res => {
				setCookie('token', '');
				location.href = '/login';
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1 className='text-center p-5'>Home</h1>

			{userInfo && (
				<>
					<h5>User info</h5>
					<ul>
						<li>{userInfo.id}</li>
						<li>{userInfo.name}</li>
						<li>{userInfo.email}</li>
					</ul>
				</>
			)}

			<button className='btn btn-primary' onClick={logoutHandler}>
				Log out
			</button>
		</div>
	);
};

export default Home;
