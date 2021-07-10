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
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import CurrentlyBorrowedBooks from './user_content/CurrentlyBorrowedBooks';
import DeleteAccount from './user_content/DeleteAccount';
import ChangePassword from './user_content/ChangePassword';
import ChangeEmail from './user_content/ChangeEmail';
import UserInfo from './user_content/UserInfo';

const UserLayout = props => {
	let { path, url } = useRouteMatch();
	const [user, setUser] = [props.user, props.setUser];
	const [needsToVerifyAcc, setNeedsToVerifyAcc] = [
		props.needsToVerifyAcc,
		props.setNeedsToVerifyAcc,
	];
	const history = useHistory();

	const [showsSideBar, setShowsSideBar] = useState(false);

	return (
		<div id='page-top'>
			<div id='wrapper'>
				{/* Sidebar */}
				<ul
					className={
						'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' +
						(showsSideBar ? '' : ' toggled')
					}
					id='accordionSidebar'
				>
					{/* Divider */}
					<hr className='sidebar-divider' />

					<li className='nav-item'>
						<Link to={`${url}`} className='nav-link'>
							My Profile
						</Link>
					</li>

					<hr className='sidebar-divider' />

					{/* Nav Item - Dashboard */}
					<div className='sidebar-heading'>Activity</div>
					<li className='nav-item'>
						<Link to={`${url}/borrowed-books`} className='nav-link'>
							Currently Borrowed books
						</Link>
					</li>

					<li className='nav-item'>
						<Link to={`${url}/logs`} className='nav-link'>
							Logs
						</Link>
					</li>

					<hr className='sidebar-divider' />

					<button
						className='btn btn-primary m-1'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#userAccount'
						aria-expanded='false'
						aria-controls='userAccount'
					>
						Account Settings
						<FaChevronDown />
					</button>
					{/* <div className='sidebar-heading'>Account</div> */}
					<div
						className='collapse bg-primary text-center rounded m-1'
						id='userAccount'
					>
						<li className='nav-item'>
							<Link to={`${url}/info`} className='nav-link'>
								User Info
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/change-email`} className='nav-link'>
								Change Email
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/change-password`} className='nav-link'>
								Change Password
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/delete-account`} className='nav-link'>
								Delete Account
							</Link>
						</li>
					</div>

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
							<button
								id='sidebarToggleTop'
								className='btn btn-link d-md-none rounded-circle mr-3'
								onClick={() => setShowsSideBar(!showsSideBar)}
							>
								<img
									style={{ maxHeight: '5vw', opacity: '50%' }}
									src='/img/icons8-menu.svg'
								/>
							</button>

							<Switch>
								<Route path={`${path}/logs`}>
									<UserLogs />
								</Route>
								<Route path={`${path}/borrowed-books`}>
									<CurrentlyBorrowedBooks />
								</Route>

								<Route path={`${path}/delete-account`}>
									<DeleteAccount user={user} setUser={setUser} />
								</Route>

								<Route path={`${path}/info`}>
									<UserInfo
										user={user}
										setUser={setUser}
										needsToVerifyAcc={needsToVerifyAcc}
										setNeedsToVerifyAcc={setNeedsToVerifyAcc}
									/>
								</Route>

								<Route path={`${path}/change-email`}>
									<ChangeEmail
										user={user}
										setUser={setUser}
										needsToVerifyAcc={needsToVerifyAcc}
										setNeedsToVerifyAcc={setNeedsToVerifyAcc}
									/>
								</Route>

								<Route path={`${path}/change-password`}>
									<ChangePassword />
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
					<footer className='sticky-footer bg-none'>
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
