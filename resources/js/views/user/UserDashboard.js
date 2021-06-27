import axios from "../../functions/axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useParams,
	useRouteMatch,
} from "react-router-dom";

import "./imports/sb-admin-2.min.css";
import "./imports/sb-admin-2.js";
import "./imports/sb-admin-2.min.js";

import BorrowBook from "./user_content/BorrowBook";
const AdminLayout = () => {
	let { path, url } = useRouteMatch();
	const history = useHistory();

	const [UserInfo, setUserInfo] = useState();

	useEffect(() => {
		axios
			.get("/api/auth/user")
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
					{/* Sidebar - Brand */}
					<Link
						to={`${url}`}
						className='sidebar-brand d-flex align-items-center justify-content-center'
						href='/'
					>
						<div className='sidebar-brand-icon rotate-n-15'>
							<i className='fas fa-laugh-wink'></i>
						</div>
						<div className='sidebar-brand-text mx-3'>User Dashboard</div>
					</Link>

					{/* Divider */}
					<hr className='sidebar-divider my-0' />

					{/* Nav Item - Dashboard */}
					<li className='nav-item'>
						<Link to={`${url}`} className='nav-link'>
							<i className='fas fa-fw fa-tachometer-alt'></i>
							<span>Currently Borrow books</span>
						</Link>
					</li>

					{/* Divider */}
					<hr className='sidebar-divider' />

					{/* Heading */}
					<div className='sidebar-heading'>Book Review</div>

					{/* Nav Item - Pages Collapse Menu */}
				</ul>
				{/* -----------------------------------------  End of Sidebar ----------------------------------------- */}

				{/* Content Wrapper */}
				<div id='content-wrapper' className='d-flex flex-column'>
					{/* Main Content */}
					<div id='content'>
						{/* Begin Page Content */}
						<div className='container-fluid'>
							<BorrowBook />
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
