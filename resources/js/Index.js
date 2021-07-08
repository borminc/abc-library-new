import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import Unauthorized from './views/Unauthorized';
import { getCookie } from './functions/cookies';

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

import './views/imports/sb-admin-2.min.css';
import './views/imports/sb-admin-2.js';
import './views/imports/sb-admin-2.min.js';
import ScrollArrow from './components/ScrollArrow';

const Index = () => {
	const [user, setUser] = useState('loading');

	useEffect(() => {
		if (getCookie('token')) {
			axios
				.get('/api/auth/user')
				.then(res => {
					setUser(res.data);
				})
				.catch(err => {
					setUser(null);
				});
		} else {
			setUser(null);
		}
	}, []);

	return (
		<div>
			<Router>
				<div style={{ position: 'sticky', top: 0, zIndex: 3 }}>
					<ABCNav user={user} setUser={setUser} />
				</div>

				<div>
					<Switch>
						<Route path='/login'>
							<Login user={user} setUser={setUser} />
						</Route>
						<Route path='/register'>
							<Register user={user} setUser={setUser} />
						</Route>
						<Route path='/user'>
							<PrivateRoute
								component={<UserLayout user={user} setUser={setUser} />}
							/>
						</Route>
						<Route path='/admin'>
							<AdminRoute component={<AdminLayout />} />
						</Route>

						<Route path='/unauthorized'>
							<Unauthorized />
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
