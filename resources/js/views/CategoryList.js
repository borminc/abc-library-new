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

const CategoryList = props => {
	const history = useHistory();
	const [categories, setCategories] = [props.categories, props.setCategories];

	return (
		<div className='container mt-4'>
			<div className='d-flex justify-content-between mt-2 mb-4'>
				<h1 className='pr-4'>All Categories</h1>
			</div>

			<div className='row'>
				{categories &&
					categories.map((category, i) => (
						<div key={i} className='col-6 col-sm-6 col-md-4 col-lg-3 p-3'>
							<div
								className='card h-100 text-hover-primary'
								style={{ cursor: 'pointer' }}
								onClick={() => history.push('/categories/' + category.id)}
							>
								<div className='card-body'>
									<h5 className='card-title'>{category.name}</h5>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default CategoryList;
