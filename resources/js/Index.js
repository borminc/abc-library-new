import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from './functions/axios';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import Unauthorized from './views/Unauthorized';
import { deleteCookie, getCookie } from './functions/cookies';

import Login from './views/Login';
import Register from './views/Register';
import Home from './Views/Home';
import AdminLayout from './views/admin/AdminLayout';
import NotFound from './views/NotFound';
import Borrow from './views/Borrow';
import ABCNav from './components/ABCNav';
import UserLayout from './views/user/UserLayout';
import Categories from './views/Categories';
import AllBooks from './views/AllBooks';
import LatestBooks from './views/LatestBooks';
import PopularBooks from './views/PopularBooks';
import VerifyEmail from './views/VerifyEmail';
import AboutUs from './views/AboutUs';
import CategoryList from './views/CategoryList';

import './views/imports/sb-admin-2.min.css';
import './views/imports/sb-admin-2.js';
import './views/imports/sb-admin-2.min.js';
import ScrollArrow from './components/ScrollArrow';
import VerifyEmailSuccessful from './views/VerifyEmailSuccessful';
import DeleteAccountSuccessful from './views/DeleteAccountSuccessful';

const Index = () => {
	const [user, setUser] = useState('loading');
	const [needsToVerifyAcc, setNeedsToVerifyAcc] = useState({
		username: '',
		status: false,
	});
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (getCookie('token')) {
			axios
				.get('/api/auth/user')
				.then(res => {
					setUser(res.data);
				})
				.catch(async err => {
					if (
						err.response.status == 403 ||
						err.response.data.message === 'Your email address is not verified.'
					) {
						const res = await axios.get('/api/auth/username');
						const username = res.data;
						setNeedsToVerifyAcc({ username: username, status: true });
						setUser(null);
					} else {
						deleteCookie('token');
						setUser(null);
					}
				});
		} else {
			setUser(null);
		}
	}, []);

	useEffect(() => {
		axios.get('/api/categories').then(res => {
			const data = res.data;
			const sorted = [...data].sort((a, b) => {
				if (a.name > b.name) return 1;
				else if (a.name < b.name) return -1;
				return 0;
			});
			setCategories(sorted);
		});
	}, []);

	return (
		<div>
			<Router>
				<div style={{ position: 'sticky', top: 0, zIndex: 3 }}>
					<ABCNav
						user={user}
						setUser={setUser}
						needsToVerifyAcc={needsToVerifyAcc}
						setNeedsToVerifyAcc={setNeedsToVerifyAcc}
						categories={categories}
						setCategories={setCategories}
					/>
				</div>

				<div>
					<Switch>
						<Route path='/login'>
							<Login
								user={user}
								setUser={setUser}
								needsToVerifyAcc={needsToVerifyAcc}
								setNeedsToVerifyAcc={setNeedsToVerifyAcc}
							/>
						</Route>
						<Route path='/register'>
							<Register
								user={user}
								setUser={setUser}
								needsToVerifyAcc={needsToVerifyAcc}
								setNeedsToVerifyAcc={setNeedsToVerifyAcc}
							/>
						</Route>
						<Route path='/user'>
							<PrivateRoute
								component={
									<UserLayout
										user={user}
										setUser={setUser}
										needsToVerifyAcc={needsToVerifyAcc}
										setNeedsToVerifyAcc={setNeedsToVerifyAcc}
									/>
								}
							/>
						</Route>
						<Route path='/admin'>
							<AdminRoute
								component={
									<AdminLayout
										categories={categories}
										setCategories={setCategories}
									/>
								}
							/>
						</Route>

						<Route path='/unauthorized'>
							<Unauthorized />
						</Route>

						<Route path='/verify-email'>
							<VerifyEmail user={user} setUser={setUser} />
						</Route>

						<Route path='/verify-email-success'>
							<VerifyEmailSuccessful />
						</Route>

						<Route path='/delete-account-success'>
							<DeleteAccountSuccessful />
						</Route>

						<Route exact path='/categories'>
							<CategoryList
								categories={categories}
								setCategories={setCategories}
							/>
						</Route>

						<Route path='/categories/:categoryId' children={<Categories />} />

						<Route
							path='/borrow/:bookId'
							children={<PrivateRoute component={<Borrow />} />}
						/>

						<Route path='/borrow'>
							<Borrow />
						</Route>

						<Route path='/all-books'>
							<AllBooks />
						</Route>

						<Route path='/latest-books'>
							<LatestBooks />
						</Route>

						<Route path='/popular-books'>
							<PopularBooks />
						</Route>

						<Route path='/about-us'>
							<AboutUs />
						</Route>

						<Route exact path='/'>
							<Home />
						</Route>

						<Route>
							<NotFound />
						</Route>
					</Switch>
				</div>
			</Router>

			<ScrollArrow />
		</div>
	);
};

export default Index;

if (document.getElementById('index')) {
	ReactDOM.render(<Index />, document.getElementById('index'));
}
