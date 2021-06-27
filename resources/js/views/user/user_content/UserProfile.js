import axios from '../../../functions/axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { Loading, LoadingButton } from '../../../components/Loading';

const UserProfile = props => {
	const [isLoading, setLoading] = useState(false);
	const [user, setUser] = [props.user, props.setUser];

	return (
		<div>
			<div className='row mt-4 mb-2'>
				<h4 className='col-lg-4'>User Profile</h4>
			</div>

			<table className='table'>
				<tbody>
					<tr>
						<th scope='row'>Name</th>
						<td>{user.name}</td>
					</tr>
					<tr>
						<th scope='row'>Email</th>
						<td>{user.email}</td>
					</tr>
					<tr>
						<th scope='row'>Phone</th>
						<td>{user.phone}</td>
					</tr>
					<tr>
						<th scope='row'>ID</th>
						<td>{user.id}</td>
					</tr>
				</tbody>
			</table>

			{isLoading && <Loading height='1vh' size='2rem' />}
		</div>
	);
};

export default UserProfile;
