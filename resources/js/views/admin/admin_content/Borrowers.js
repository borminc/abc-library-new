import axios from '../../../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import MessageAlert from './../../../components/MessageAlert';
import { Loading, LoadingButton } from './../../../components/Loading';

const Borrowers = () => {
	const [isLoading, setLoading] = useState(false);
	const [users, setUsers] = useState();
	const [selectedUser, setSelectedUser] = useState();
	const [returnInfo, setReturnInfo] = useState({ user: null, book: null });
	const [isReturning, setReturning] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		getUsersFromServer();
	}, []);

	const getUsersFromServer = () => {
		setLoading(true);
		axios
			.get('/api/all-borrowers')
			.then(res => {
				setUsers(res.data);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const returnBookHandler = () => {
		if (!returnInfo || !returnInfo.user || !returnInfo.book) return;
		setReturning(true);
		axios
			.post('/api/books/return', {
				user_id: returnInfo.user.id,
				book_id: returnInfo.book.id,
			})
			.then(res => {
				setMsg({ text: 'The return was successful!', success: 1 });
				setReturnInfo({ user: null, book: null });
			})
			.catch(err => {
				console.log(err.response);
				setMsg({ text: 'There was a problem: ' + err.response, success: 0 });
			})
			.finally(() => {
				setReturning(false);
				getUsersFromServer();
			});
	};

	const searchMatches = (user, value) => {
		return (
			user.id == value ||
			user.name.toLowerCase().includes(value.toLowerCase()) ||
			user.email.toLowerCase().includes(value.toLowerCase()) ||
			user.phone.toLowerCase().includes(value.toLowerCase())
		);
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>All borrowers</h4>
				<input
					type='text'
					className='col-lg-8 form-control border-0 small'
					placeholder='Search for id, name, email, phone...'
					aria-label='Search'
					aria-describedby='basic-addon2'
					onChange={e => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<div className='overflow-auto'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Phone</th>
							<th scope='col'>Books borrowed</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user, i) => {
								if (
									searchValue &&
									(searchValue == '' || !searchMatches(user, searchValue))
								)
									return null;
								else {
									return (
										<tr key={i}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.phone}</td>
											<td>{user.books.length}</td>
											<td>
												<button
													type='button'
													className='btn btn-outline-primary'
													id='open-user-info-modal-button'
													data-bs-toggle='modal'
													data-bs-target='#user-info-modal'
													onClick={e => {
														setSelectedUser(user);
													}}
												>
													More info
												</button>
											</td>
										</tr>
									);
								}
							})}
					</tbody>
				</table>
			</div>

			{/* User detail modal */}
			<div
				className='modal fade'
				id='user-info-modal'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-xl modal-dialog-scrollable'
					role='document'
				>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								User information
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							{selectedUser && (
								<>
									<table className='table'>
										<tbody>
											<tr>
												<th scope='row'>ID</th>
												<td>{selectedUser.id}</td>
											</tr>
											<tr>
												<th scope='row'>Name</th>
												<td>{selectedUser.name}</td>
											</tr>
											<tr>
												<th scope='row'>Email</th>
												<td>{selectedUser.email}</td>
											</tr>
											<tr>
												<th scope='row'>Phone</th>
												<td>{selectedUser.phone}</td>
											</tr>
										</tbody>
									</table>

									<div style={{ height: '10px' }}></div>

									<h5>Currently borrowed books: {selectedUser.books.length}</h5>
									<table className='table'>
										<thead>
											<tr>
												<th scope='col'>ID</th>
												<th scope='col'>Title</th>
												<th scope='col'>Borrow date</th>
												<th scope='col'>Return date</th>
												<th scope='col'>Days late</th>
												<th scope='col'>Amount due</th>
												<th scope='col'>Actions</th>
											</tr>
										</thead>
										<tbody>
											{selectedUser.books.map((book, i) => (
												<tr key={i}>
													<th scope='row'>{book.id}</th>
													<td>{book.title}</td>
													<td>{book.borrow_date}</td>
													<td className={book.expired ? 'text-danger' : ''}>
														{book.return_date}
													</td>
													<td className={book.expired ? 'text-danger' : ''}>
														{book.days_past_expired || 'n/a'}
													</td>
													<td className={book.expired ? 'text-danger' : ''}>
														${book.cost}
													</td>
													<td>
														<button
															className='btn btn-success'
															data-bs-toggle='modal'
															data-bs-target='#confirm-modal'
															onClick={e => {
																setReturnInfo({
																	user: selectedUser,
																	book: book,
																});
																setMsg({ ...msg, text: '' });
																document
																	.getElementById('close-user-info-modal')
																	.click();
															}}
														>
															Accept return
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</>
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								id='close-user-info-modal'
								data-bs-dismiss='modal'
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Confirm modal */}
			<div
				className='modal fade'
				id='confirm-modal'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								Confirmation
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							{returnInfo && returnInfo.user && returnInfo.book && (
								<>
									<div>
										Are you sure you want to accept the return of this book from
										this user?
									</div>

									<table className='table'>
										<thead>
											<tr>
												<th scope='col'>User</th>
												<th scope='col'>Book</th>
												<th scope='col'>Cost</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{returnInfo.user.name}</td>
												<td>{returnInfo.book.title}</td>
												<td
													className={
														returnInfo.book.cost == 0 ? '' : 'text-danger'
													}
												>
													$
													{returnInfo.book.cost == 0
														? 0
														: returnInfo.book.cost + '*'}
												</td>
											</tr>
										</tbody>
									</table>

									{returnInfo.book.cost != 0 && (
										<span className='text-danger'>
											*Make sure all fees are paid before accepting.
										</span>
									)}
								</>
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={() => {
									setReturnInfo({ user: null, book: null });
									document
										.getElementById('open-user-info-modal-button')
										.click();
								}}
							>
								Cancel
							</button>

							{isReturning ? (
								<LoadingButton />
							) : (
								<button
									type='button'
									className={
										'btn btn-success' +
										(returnInfo && returnInfo.user ? '' : ' disabled')
									}
									onClick={returnBookHandler}
								>
									Accept now
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{isLoading && <Loading height='1vh' size='2rem' />}
		</div>
	);
};

export default Borrowers;
