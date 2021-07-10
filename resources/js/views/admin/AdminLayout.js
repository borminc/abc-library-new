import axios from '../../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
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

import { setCookie, getCookie, deleteCookie } from '../../functions/cookies';
import './../imports/sb-admin-2.min.css';
import './../imports/sb-admin-2.js';
import './../imports/sb-admin-2.min.js';

import AdminDashboard from './admin_content/AdminDashboard';
import Categories from './admin_content/Categories';
import Books from './admin_content/Books';
import Users from './admin_content/Users';
import Rules from './admin_content/Rules';
import Publishers from './admin_content/Publishers';
import Borrowers from './admin_content/Borrowers';
import Logs from './admin_content/Logs';

const AdminLayout = () => {
	let { path, url } = useRouteMatch();
	const history = useHistory();

	const [showsSideBar, setShowsSideBar] = useState(false);

	return (
		<div id='page-top'>
			<div id='wrapper'>
				{/* Sidebar */}
				<ul
					className={
						'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ' +
						(showsSideBar ? '' : ' toggled')
					}
					id='accordionSidebar'
				>
					{/* Divider */}
					<hr className='sidebar-divider' />

					{/* Nav Item - Dashboard */}
					<li className='nav-item'>
						<Link to={`${url}`} className='nav-link'>
							Admin Dashboard
						</Link>
					</li>

					{/* Divider */}
					<hr className='sidebar-divider' />

					{/* Heading */}
					{/* <div className='sidebar-heading'>Resources</div> */}
					<button
						className='btn btn-primary m-2 d-flex justify-content-between align-items-center'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#adminResource'
						aria-expanded='false'
						aria-controls='adminResource'
					>
						Resources
						<FaChevronDown />
					</button>
					<div
						className='collapse text-center rounded m-2 nav-item-block'
						id='adminResource'
					>
						<li className='nav-item'>
							<Link to={`${url}/categories`} className='nav-link'>
								Categories
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/publishers`} className='nav-link'>
								Publishers
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/books`} className='nav-link'>
								Books
							</Link>
						</li>
					</div>
					{/* <hr className='sidebar-divider' /> */}
					{/* <div className='sidebar-heading'>Management</div> */}
					<button
						className='btn btn-primary m-2 d-flex justify-content-between align-items-center'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#adminManagement'
						aria-expanded='false'
						aria-controls='adminManagement'
					>
						Manage
						<FaChevronDown />
					</button>
					<div
						className='collapse text-center rounded m-2 nav-item-block'
						style={{ backgroundColor: 'rgba(255, 255, 255, 0.095)' }}
						id='adminManagement'
					>
						<li className='nav-item'>
							<Link to={`${url}/users`} className='nav-link'>
								Users
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/borrowers`} className='nav-link'>
								Borrowers
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/logs`} className='nav-link'>
								Logs
							</Link>
						</li>

						<li className='nav-item'>
							<Link to={`${url}/rules`} className='nav-link'>
								Rules
							</Link>
						</li>
					</div>
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
								className='btn btn-link d-md-none rounded mr-3'
								onClick={() => setShowsSideBar(!showsSideBar)}
							>
								<img
									style={{ maxHeight: '5vw', opacity: '50%' }}
									src='/img/icons8-menu.svg'
								/>
							</button>

							{/* ----------------------------- ROUTER ----------------------------- */}
							{/* <Router> */}
							<Switch>
								<Route path={`${path}/categories`}>
									<Categories />
								</Route>

								<Route path={`${path}/publishers`}>
									<Publishers />
								</Route>

								<Route path={`${path}/books`}>
									<Books />
								</Route>

								<Route path={`${path}/users`}>
									<Users />
								</Route>

								<Route path={`${path}/borrowers`}>
									<Borrowers />
								</Route>

								<Route path={`${path}/rules`}>
									<Rules />
								</Route>

								<Route path={`${path}/logs`}>
									<Logs />
								</Route>

								<Route exact path={path}>
									<AdminDashboard />
								</Route>
							</Switch>
							{/* </Router> */}
						</div>
						{/* /.container-fluid */}
					</div>
					{/* End of Main Content */}

					{/* Footer */}
					<footer className='sticky-footer bg-none mt-3'>
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

export default AdminLayout;
