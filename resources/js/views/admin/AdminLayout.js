import axios from '../../functions/axios';
import { set } from 'lodash';
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

import { setCookie, getCookie, deleteCookie } from '../../functions/cookies';
import './imports/sb-admin-2.min.css';
import './imports/sb-admin-2.js';
import './imports/sb-admin-2.min.js';

import AdminDashboard from './admin_content/AdminDashboard';
import Categories from './admin_content/Categories';
import Books from './admin_content/Books';

const AdminLayout = () => {
	let { path, url } = useRouteMatch();
	const history = useHistory();

	const [adminInfo, setAdminInfo] = useState();

	useEffect(() => {
		axios
			.get('/api/auth/admin')
			.then(res => {
				setAdminInfo(res.data);
			})
			.catch(err => {});
	}, []);

	const logoutHandler = () => {
		axios
			.get('/api/auth/logout')
			.then(res => {
				deleteCookie('token');
				history.push('/login');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div id='page-top'>
			<div id='wrapper'>
				{/* Sidebar */}
				<ul
					className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
					id='accordionSidebar'
				>
					{/* Sidebar - Brand */}
					<Link
						to={`${url}`}
						className='sidebar-brand d-flex align-items-center justify-content-center'
						href='/'
					>
						<div className='sidebar-brand-icon rotate-n-15'>
							<i className='fas fa-laugh-wink'></i>
						</div>
						<div className='sidebar-brand-text mx-3'>ABC Library</div>
					</Link>

					{/* Divider */}
					<hr className='sidebar-divider my-0' />

					{/* Nav Item - Dashboard */}
					<li className='nav-item'>
						<Link to={`${url}`} className='nav-link'>
							<i className='fas fa-fw fa-tachometer-alt'></i>
							<span>Dashboard</span>
						</Link>
					</li>

					{/* Divider */}
					<hr className='sidebar-divider' />

					{/* Heading */}
					<div className='sidebar-heading'>Management</div>

					{/* Nav Item - Pages Collapse Menu */}
					<li className='nav-item'>
						<a
							className='nav-link collapsed'
							href='/'
							data-toggle='collapse'
							data-target='#collapseTwo'
							aria-expanded='true'
							aria-controls='collapseTwo'
						>
							<i className='fas fa-fw fa-cog'></i>
							<span>Resources</span>
						</a>
						<div
							id='collapseTwo'
							className='collapse'
							aria-labelledby='headingTwo'
							data-parent='#accordionSidebar'
						>
							<div className='bg-white py-2 collapse-inner rounded'>
								<Link to={`${url}/categories`} className='collapse-item'>
									Categories
								</Link>
								<Link to={`${url}/books`} className='collapse-item'>
									Books
								</Link>
							</div>
						</div>
					</li>
				</ul>
				{/* -----------------------------------------  End of Sidebar ----------------------------------------- */}

				{/* Content Wrapper */}
				<div id='content-wrapper' className='d-flex flex-column'>
					{/* Main Content */}
					<div id='content'>
						{/* Topbar */}
						<nav
							className='
							navbar navbar-expand navbar-light
							bg-white
							topbar
							mb-4
							static-top
							shadow
						'
						>
							{/* Sidebar Toggle (Topbar) */}
							<button
								id='sidebarToggleTop'
								className='btn btn-link d-md-none rounded-circle mr-3'
							>
								<i className='fa fa-bars'></i>
							</button>

							{/* Topbar Navbar */}
							<ul className='navbar-nav mr-auto'>
								{/* Nav Item - User Information */}
								<li className='nav-item dropdown no-arrow'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='userDropdown'
										role='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										<img
											className='img-profile rounded-circle'
											src='https://res.cloudinary.com/bormin/image/upload/v1623059477/ABC%20Library/resources/default-user-image_qydoi4.png'
										/>
										<span className='ml-3 d-none d-lg-inline text-gray-600'>
											{adminInfo && adminInfo.name}
										</span>
									</a>
									{/* Dropdown - User Information */}
									<div
										className='dropdown-menu dropdown-menu-left shadow animated--grow-in'
										aria-labelledby='userDropdown'
									>
										<a className='dropdown-item' href='#'>
											<i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
											Profile
										</a>
										<div className='dropdown-divider'></div>
										<button className='dropdown-item' onClick={logoutHandler}>
											<i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
											Logout
										</button>
									</div>
								</li>
							</ul>
						</nav>
						{/* End of Topbar */}

						{/* Begin Page Content */}
						<div className='container-fluid'>
							{/* ----------------------------- ROUTER ----------------------------- */}
							{/* <Router> */}
							<Switch>
								<Route path={`${path}/categories`}>
									<Categories />
								</Route>

								<Route path={`${path}/books`}>
									<Books />
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

export default AdminLayout;
