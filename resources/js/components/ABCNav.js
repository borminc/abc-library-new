import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../functions/cookies';

function ABCNav(props) {
	const history = useHistory();

	const [categories, setCategory] = useState([]);
	const [user, setUser] = [props.user, props.setUser];

	useEffect(() => {
		axios.get('/api/categories').then(res => {
			setCategory(res.data);
		});
	}, []);

	const logoutHandler = () => {
		axios
			.get('/api/auth/logout')
			.then(res => {
				deleteCookie('token');
				// history.push('/');
				location.href = '/';
				setUser(null);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='light'
			variant='light'
			className='p-2 shadow'
		>
			<Navbar.Brand href='/' className='ps-3 pe-5'>
				ABC Library
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />

			<Navbar.Collapse
				id='responsive-navbar-nav'
				className='justify-content-end'
			>
				<Nav className='mr-auto ms-3'>
					<NavDropdown title='Categories' id='collasible-nav-dropdown'>
						{categories.map((cate, i) => (
							<div key={i}>
								<NavDropdown.Item
									onClick={e => history.push('/categories/' + cate.id)}
								>
									{cate.name}
								</NavDropdown.Item>
							</div>
						))}
					</NavDropdown>
					<Nav.Link onClick={() => history.push('/all-books')}>
						All books
					</Nav.Link>
					<Nav.Link onClick={() => history.push('/latest-books')}>
						Latest
					</Nav.Link>
					<Nav.Link onClick={() => history.push('/popular-books')}>
						Popular
					</Nav.Link>
				</Nav>
				<Nav className='ms-3'>
					<Router>
						{user == 'loading' ? (
							<div
								className='spinner-border spinner-border-sm p-2 mr-4'
								role='status'
							>
								<span className='visually-hidden'>Loading...</span>
							</div>
						) : user ? (
							<NavDropdown
								title={user.name}
								id='collasible-nav-dropdown'
								className='pr-2'
								alignRight
							>
								<NavDropdown.Item>
									<button className='btn' onClick={() => history.push('/user')}>
										User Dashboard
									</button>
								</NavDropdown.Item>

								{user.is_admin && (
									<NavDropdown.Item>
										<button
											className='btn'
											onClick={() => history.push('/admin')}
										>
											Admin Dashboard
										</button>
									</NavDropdown.Item>
								)}

								<NavDropdown.Item>
									<button className='btn' onClick={logoutHandler}>
										Log out
									</button>
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<div>
								<button className='btn' onClick={() => history.push('/login')}>
									Login
								</button>
								<button
									className='btn'
									onClick={() => history.push('/register')}
								>
									Register
								</button>
							</div>
						)}
					</Router>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default ABCNav;
