import axios from '../../../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import { setCookie, getCookie, deleteCookie } from '../../../functions/cookies';
import { Loading, LoadingButton } from './../../../components/Loading';

const AdminDashboard = () => {
	const history = useHistory();
	const [books, setBooks] = useState();
	const [isLoading, setLoading] = useState(false);
	const [lowStockBooks, setLowStockBooks] = useState();

	useEffect(() => {
		setLoading(true);
		axios
			.all([
				axios.get('/api/borrowed-books'),
				axios.get('/api/low-stock-books'),
			])
			.then(
				axios.spread((res1, res2) => {
					setBooks(res1.data);
					setLowStockBooks(res2.data);
				})
			)
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div id='page-top'>
			<h4 className='col-lg-4 mb-4'>Admin Dashboard</h4>

			{books && (
				<div className='mb-5'>
					<h6 className='col-lg-4'>
						<b>Currently borrowed books: {books.length}</b>
					</h6>

					<div>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>ID</th>
									<th scope='col'>Title</th>
									<th scope='col'>Stock</th>
									<th scope='col'>Users</th>
								</tr>
							</thead>
							<tbody>
								{books.map((book, i) => (
									<tr key={i}>
										<th scope='row'>{book.id}</th>
										<td>{book.title}</td>
										<td className={book.stock <= 0 ? 'text-danger' : ''}>
											{book.stock}
										</td>
										<td>
											<a
												className='text-primary'
												role='button'
												data-bs-toggle='modal'
												data-bs-target={'#modal' + book.id}
											>
												{book.users.length}
											</a>

											{/* Modal */}
											<div
												className='modal fade'
												id={'modal' + book.id}
												tabIndex='-1'
												aria-labelledby={'#modalLabel' + book.id}
												aria-hidden='true'
											>
												<div className='modal-dialog'>
													<div className='modal-content'>
														<div className='modal-header'>
															<h5
																className='modal-title'
																id={'#modalLabel' + book.id}
															>
																{book.title}
															</h5>
															<button
																type='button'
																className='btn-close'
																data-bs-dismiss='modal'
																aria-label='Close'
															></button>
														</div>
														<div className='modal-body'>
															<h6>Users that borrowed this book: </h6>
															<table className='table'>
																<thead>
																	<tr>
																		<th scope='col'>ID</th>
																		<th scope='col'>Name</th>
																		<th scope='col'>Borrow Date</th>
																		<th scope='col'>Return Date</th>
																		<th scope='col'>Days late</th>
																	</tr>
																</thead>
																<tbody>
																	{book.users.map((user, i) => (
																		<tr key={i}>
																			<th scope='row'>{user.id}</th>
																			<td>{user.name}</td>
																			<td>{user.borrow_date}</td>
																			<td
																				className={
																					user.expired ? 'text-danger' : ''
																				}
																			>
																				{user.return_date}
																			</td>
																			<td
																				className={
																					user.days_past_expired > 0
																						? 'text-danger'
																						: ''
																				}
																			>
																				{user.days_past_expired || 'n/a'}
																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}

			{lowStockBooks && (
				<div className='mb-5'>
					<h6 className='col-lg-4'>
						<b>Low stock: {books.length}</b>
					</h6>

					<div>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>ID</th>
									<th scope='col'>Title</th>
									<th scope='col'>Stock</th>
								</tr>
							</thead>
							<tbody>
								{lowStockBooks.map((book, i) => (
									<tr key={i}>
										<th scope='row'>{book.id}</th>
										<td>{book.title}</td>
										<td className={book.stock <= 0 ? 'text-danger' : ''}>
											{book.stock}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}

			{isLoading && <Loading height='1vh' size='2rem' />}
		</div>
	);
};

export default AdminDashboard;
