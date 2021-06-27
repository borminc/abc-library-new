import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import Unauthorized from './views/Unauthorized';

import Login from './views/Login';
import Register from './views/Register';
import Home from './Views/Home';
import Test from './views/Test';
import Admin from './views/Admin';
import AdminLayout from './views/admin/AdminLayout';
import NotFound from './views/NotFound';
import Borrow from './views/Borrow';
import ABCNav from './components/ABCNav';
import UserDashboard from "./views/user/UserDashboard";

const Index = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		axios
			.get('/api/auth/user')
			.then(res => {
				setUser(res.data);
			})
			.catch(err => {
				setUser(null);
			});
	}, []);

	return (
		<div>
			<Router>
				<div style={{ position: 'sticky', top: 0, zIndex: 2 }}>
					<ABCNav user={user} setUser={setUser} />
				</div>

				<div>
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
						<Route path='/test'>
							<PrivateRoute component={<Test />} />
						</Route>
						<Route path='/user'>
							<PrivateRoute component={<UserDashboard />} />
						</Route>
						<Route path='/admin'>
							<AdminRoute component={<AdminLayout />} />
						</Route>

						<Route path='/unauthorized'>
							<Unauthorized />
						</Route>

						<Route
							path='/borrow/:bookId'
							children={<PrivateRoute component={<Borrow />} />}
						/>

						<Route exact path='/'>
							<Home />
						</Route>

						<Route>
							<NotFound />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default Index;

if (document.getElementById('index')) {
	ReactDOM.render(<Index />, document.getElementById('index'));
}
