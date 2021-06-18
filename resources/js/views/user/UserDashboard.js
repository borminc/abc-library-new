import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from './../../functions/axios';

const UserDashboard = props => {
	const [user, setUser] = [props.user, props.setUser];

	if (!user) return null;

	return (
		<div>
			<h3>User Dashboard</h3>
			<ul>
				<li>{user.name}</li>
				<li>{user.email}</li>
				<li>{user.phone}</li>
			</ul>
		</div>
	);
};
export default UserDashboard;
