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
				history.push('/');
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
			className='fixed-top p-2'
		>
			<Navbar.Brand href='/'>ABC Library</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse
				id='responsive-navbar-nav'
				className='justify-content-end'
			>
				<Nav className='mr-auto'>
					<NavDropdown
						title='Category'
						id='collasible-nav-dropdown'
						className='p-2'
					>
						{categories.map((cate, i) => (
							<div key={i}>
								<NavDropdown.Item href={'#' + i}>{cate.name}</NavDropdown.Item>
							</div>
						))}
					</NavDropdown>
				</Nav>
				<Nav>
					<Router>
						{user ? (
							<div>
								<button className='btn btn-link'>{user.name}</button>
								<button className='btn btn-link' onClick={logoutHandler}>
									log out
								</button>
							</div>
						) : (
							<div>
								<button
									className='btn btn-link'
									onClick={() => history.push('/login')}
								>
									Login
								</button>
								<button
									className='btn btn-link'
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
