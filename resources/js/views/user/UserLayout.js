import axios from '../../functions/axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';

import UserLogs from './user_content/UserLog';
import UserProfile from './user_content/UserProfile';
import './../imports/sb-admin-2.min.css';
import '../imports/sb-admin-2.js';
import '../imports/sb-admin-2.min.js';

import CurrentlyBorrowedBooks from './user_content/CurrentlyBorrowedBooks';

const UserLayout = props => {
	let { path, url } = useRouteMatch();
	const history = useHistory();

	const [UserInfo, setUserInfo] = useState();

	useEffect(() => {
		axios
			.get('/api/auth/user')
			.then(res => {
				setUserInfo(res.data);
			})
			.catch(err => {});
	}, []);

	return (
		<div id='page-top'>
			<div id='wrapper'>
				{/* Sidebar */}
				<ul
					className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
					id='accordionSidebar'
				>
					{/* Divider */}
					<hr className='sidebar-divider' />

					<li className='nav-item'>
						<Link to={`${url}`} className='nav-link'>
							<i className='fas fa-fw fa-tachometer-alt'></i>
							<span>My Profile</span>
						</Link>
					</li>

					<hr className='sidebar-divider' />

					{/* Nav Item - Dashboard */}
					<li className='nav-item'>
						<Link to={`${url}/borrowed-books`} className='nav-link'>
							<i className='fas fa-fw fa-tachometer-alt'></i>
							<span>Currently Borrowed books</span>
						</Link>
					</li>

					<li className='nav-item'>
						<Link to={`${url}/logs`} className='nav-link'>
							<i className='fas fa-fw fa-tachometer-alt'></i>
							<span>Logs</span>
						</Link>
					</li>

					{/* Divider */}

					{/* Heading */}
					{/* <div className='sidebar-heading'>Book Review</div> */}

					{/* Nav Item - Pages Collapse Menu */}
				</ul>
				{/* -----------------------------------------  End of Sidebar ----------------------------------------- */}

				{/* Content Wrapper */}
				<div id='content-wrapper' className='d-flex flex-column pt-4'>
					{/* Main Content */}
					<div id='content'>
						{/* Begin Page Content */}
						<div className='container-fluid'>
							<Switch>
								<Route path={`${path}/logs`}>
									<UserLogs />
								</Route>
								<Route path={`${path}/borrowed-books`}>
									<CurrentlyBorrowedBooks />
								</Route>

								<Route exact path={path}>
									<UserProfile user={props.user} setUser={props.setUser} />
								</Route>
							</Switch>
						</div>
						{/* /.container-fluid */}
					</div>
					{/* End of Main Content */}

					{/* Footer */}
					<footer className='sticky-footer bg-white'>
						<div className='container my-auto'>
							<div className='copyright text-center my-auto'>
								<span>Copyright &copy; ABC Library 2021</span>
							</div>
						</div>
					</footer>
					{/* End of Footer */}
				</div>
				{/* End of Content Wrapper */}
			</div>
			{/* End of Page Wrapper */}
		</div>
	);
};

export default UserLayout;
