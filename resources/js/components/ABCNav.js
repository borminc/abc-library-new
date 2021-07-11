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
	const [categories, setCategories] = [props.categories, props.setCategories];
	const NUM_CATEGORIES_SHOW = 5;

	const [isLoggingOut, setLoggingOut] = useState(false);

	const [user, setUser] = [props.user, props.setUser];
	const [needsToVerifyAcc, setNeedsToVerifyAcc] = [
		props.needsToVerifyAcc,
		props.setNeedsToVerifyAcc,
	];

	const logoutHandler = () => {
		setLoggingOut(true);
		axios.get('/api/auth/logout').finally(() => {
			setLoggingOut(false);
			deleteCookie('token');
			location.href = '/';
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
					<Nav.Link onClick={() => history.push('/about-us')}>
						About Us
					</Nav.Link>

					<Nav.Link onClick={() => history.push('/all-books')}>
						All books
					</Nav.Link>
					<Nav.Link onClick={() => history.push('/latest-books')}>
						Latest
					</Nav.Link>
					<Nav.Link onClick={() => history.push('/popular-books')}>
						Popular
					</Nav.Link>
					<NavDropdown title='Categories' id='collasible-nav-dropdown'>
						{categories &&
							categories.map((cate, i) => {
								if (i + 1 <= NUM_CATEGORIES_SHOW)
									return (
										<div key={i}>
											<NavDropdown.Item
												onClick={e => history.push('/categories/' + cate.id)}
											>
												{cate.name}
											</NavDropdown.Item>
										</div>
									);
							})}

						{categories && categories.length > NUM_CATEGORIES_SHOW && (
							<NavDropdown.Item
								className='text-primary'
								onClick={e => history.push('/categories')}
							>
								See more...
							</NavDropdown.Item>
						)}
					</NavDropdown>
				</Nav>
				<Nav className='ms-3'>
					<Router>
						{user == 'loading' || isLoggingOut ? (
							<div
								className='spinner-border spinner-border-sm p-2 mr-4'
								role='status'
							>
								<span className='visually-hidden'>Loading...</span>
							</div>
						) : needsToVerifyAcc && needsToVerifyAcc.status ? (
							<>
								<Nav.Link onClick={() => history.push('/verify-email')}>
									{needsToVerifyAcc.username + ' - Verifiy Account Now'}
								</Nav.Link>
								<Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
							</>
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
							<>
								<Nav.Link onClick={() => history.push('/login')}>
									Login
								</Nav.Link>
								<Nav.Link onClick={() => history.push('/register')}>
									Register
								</Nav.Link>
							</>
						)}
					</Router>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default ABCNav;
