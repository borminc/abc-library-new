import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './views/Login';
import Register from './views/Register';
import Home from './Views/Home';

const Index = () => {
	return (
		<div className='container'>
			<Router>
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
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
						<Route path='/'>
							<PrivateRoute component={<Home />} />
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
