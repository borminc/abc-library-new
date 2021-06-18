import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import Unauthorized from './views/Unauthorized';

import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Test from './views/Test';
import Admin from './views/Admin';
import NotFound from './views/NotFound';
import Borrow from './views/Borrow';

import ABCNav from './components/ABCNav';

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
				<div>
					<ABCNav user={user} setUser={setUser} />
				</div>
				<div>
					{/* <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Login">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav> */}

					<Switch>
						<Route
							path='/borrow/:bookId'
							children={<PrivateRoute component={<Borrow />} />}
						/>

						<Route path='/login'>
							<Login user={user} setUser={setUser} />
						</Route>

						<Route path='/register'>
							<Register user={user} setUser={setUser} />
						</Route>

						<Route path='/test'>
							<PrivateRoute component={<Test />} />
						</Route>
						<Route path='/admin'>
							<AdminRoute component={<Admin />} />
						</Route>

						<Route path='/unauthorized'>
							<Unauthorized />
						</Route>

						<Route exact path='/'>
							<PrivateRoute component={<Home />} />
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
