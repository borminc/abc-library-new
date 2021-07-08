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

const Users = () => {
	const [isLoading, setLoading] = useState(false);
	const [users, setUsers] = useState();
	const [selectedUser, setSelectedUser] = useState();
	const [returnInfo, setReturnInfo] = useState({
		user: null,
		book: null,
		mode: null,
	});
	const [isReturning, setReturning] = useState(false);
	const [isDeletingUser, setDeleteingUser] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });

	const [searchValue, setSearchValue] = useState('');
	const NUM_INCREMENTS = 10;
	const [numShow, setNumShow] = useState(NUM_INCREMENTS);

	const [sortType, setSortType] = useState('');

	useEffect(() => {
		if (users && sortType) sortArray(sortType);
	}, [sortType]);

	const sortArray = type => {
		const types = {
			id: 'id',
			name: 'name',
			email: 'email',
		};
		const sortProperty = types[type];
		const sorted = [...users].sort((a, b) => {
			const _a = isNaN(a[sortProperty])
				? a[sortProperty].toLowerCase()
				: a[sortProperty];
			const _b = isNaN(b[sortProperty])
				? b[sortProperty].toLowerCase()
				: b[sortProperty];
			if (_a < _b) return -1;

			if (_a > _b) return 1;

			return 0;
		});
		setUsers(sorted);
	};

	useEffect(() => {
		getUsersFromServer();
	}, []);

	const refresh = () => {
		getUsersFromServer();
		setSortType('');
	};

	const getUsersFromServer = () => {
		setLoading(true);
		axios
			.get('/api/all-users-books')
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
		if (!returnInfo || !returnInfo.user || !returnInfo.book || !returnInfo.mode)
			return;

		let url =
			returnInfo.mode == 'return' ? '/api/books/return' : '/api/books/lost';

		setReturning(true);
		axios
			.post(url, {
				user_id: returnInfo.user.id,
				book_id: returnInfo.book.id,
			})
			.then(res => {
				setMsg({ text: 'The return was successful!', success: 1 });
				setReturnInfo({ user: null, book: null, mode: null });
			})
			.catch(err => {
				console.log(err.response);
				setMsg({ text: 'There was a problem: ' + err.response, success: 0 });
			})
			.finally(() => {
				setReturning(false);
				refresh();
			});
	};

	const deleteUserHandler = user_id => {
		setDeleteingUser(true);
		axios
			.post('/api/delete-user', { user_id: user_id })
			.then(res => {
				setMsg({ text: 'User was deleted successfully!', success: 1 });
				document
					.getElementById('delete-user-modal-close-btn' + user_id)
					.click();
			})
			.catch(err => {
				setMsg({
					text: 'There was a problem: ' + err.response.data.error,
					success: 0,
				});
			})
			.finally(() => {
				setDeleteingUser(false);
				refresh();
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
				<h4
					className='col-lg-4'
					style={{ cursor: 'pointer' }}
					onClick={refresh}
				>
					All users
				</h4>
				<input
					type='text'
					className='col-lg-8 form-control border-0 small'
					placeholder='Search for id, name, email, phone...'
					aria-label='Search'
					aria-describedby='basic-addon2'
					onChange={e => {
						setSearchValue(e.target.value);
						if (e.target.value === '') setNumShow(NUM_INCREMENTS);
						else if (users && users.length > 0) setNumShow(users.length);
					}}
				/>
			</div>
			<div className='overflow-auto'>
				{isLoading && <Loading height='1vh' size='2rem' />}
				<table className='table'>
					<thead>
						<tr>
							<th
								scope='col'
								style={{ cursor: 'pointer' }}
								className={
									'dropdown-toggle ' + (sortType === 'id' ? 'text-primary' : '')
								}
								onClick={() => setSortType('id')}
							>
								ID
							</th>
							<th
								scope='col'
								style={{ cursor: 'pointer' }}
								className={
									'dropdown-toggle ' +
									(sortType === 'name' ? 'text-primary' : '')
								}
								onClick={() => setSortType('name')}
							>
								Name
							</th>
							<th
								scope='col'
								style={{ cursor: 'pointer' }}
								className={
									'dropdown-toggle ' +
									(sortType === 'email' ? 'text-primary' : '')
								}
								onClick={() => setSortType('email')}
							>
								Email
							</th>
							<th scope='col'>Phone</th>
							<th scope='col'>Books borrowed</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user, i) => {
								if (
									(searchValue &&
										(searchValue == '' || !searchMatches(user, searchValue))) ||
									i + 1 > numShow
								)
									return null;
								else {
									return (
										<tr key={i}>
											<td>{user.id}</td>
											<td>
												<span className='d-flex align-items-center'>
													{user.name}
													{user.is_verified && (
														<img
															className='ml-2'
															src='/img/tick.svg'
															style={{ height: '12px', opacity: '50%' }}
														/>
													)}
													{user.is_admin && (
														<img
															className='ml-2'
															src='/img/user.svg'
															style={{ height: '12.5px', opacity: '50%' }}
														/>
													)}
												</span>
											</td>
											<td>{user.email}</td>
											<td>{user.phone}</td>
											<td>{user.books.length}</td>
											<td>
												<button
													type='button'
													className='btn btn-outline-primary mr-2 mb-2'
													id='open-user-info-modal-button'
													data-bs-toggle='modal'
													data-bs-target='#user-info-modal'
													onClick={e => {
														setSelectedUser(user);
													}}
												>
													More info
												</button>
												<button
													type='button'
													className='btn btn-outline-danger mr-2 mb-2'
													data-bs-toggle='modal'
													data-bs-target={'#delete-user-modal' + user.id}
													onClick={() => setMsg({ text: '', success: '' })}
													disabled={user.books.length > 0}
												>
													Delete
												</button>

												{/* Delete User Modal */}
												<div
													className='modal fade'
													id={'delete-user-modal' + user.id}
													tabIndex='-1'
													aria-labelledby='delete-user-modal-label'
													aria-hidden='true'
												>
													<div className='modal-dialog'>
														<div className='modal-content'>
															<div className='modal-header'>
																<h5
																	className='modal-title'
																	id='delete-user-modal-label'
																>
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
																	<MessageAlert
																		msg={msg.text}
																		success={msg.success}
																	/>
																)}

																<p>
																	Are you sure you want to delete this user's
																	account?
																</p>
																<table className='table'>
																	<tbody>
																		<tr>
																			<th scope='row'>ID</th>
																			<td>{user.id}</td>
																		</tr>
																		<tr>
																			<th scope='row'>Name</th>
																			<td>{user.name}</td>
																		</tr>
																		<tr>
																			<th scope='row'>Email</th>
																			<td>{user.email}</td>
																		</tr>
																		<tr>
																			<th scope='row'>Phone</th>
																			<td>{user.phone}</td>
																		</tr>
																	</tbody>
																</table>
																<p className='text-danger'>
																	This action cannot be undone.
																</p>
															</div>
															<div className='modal-footer'>
																<button
																	type='button'
																	className='btn btn-secondary'
																	data-bs-dismiss='modal'
																	id={'delete-user-modal-close-btn' + user.id}
																>
																	Close
																</button>
																{isDeletingUser ? (
																	<span
																		className='btn p-0'
																		style={{ width: '90px' }}
																	>
																		<LoadingButton color='danger' />
																	</span>
																) : (
																	<button
																		type='button'
																		className='btn btn-danger'
																		onClick={() => deleteUserHandler(user.id)}
																	>
																		Delete
																	</button>
																)}
															</div>
														</div>
													</div>
												</div>
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
															className='btn btn-outline-danger mr-2 mb-2'
															data-bs-toggle='modal'
															data-bs-target='#confirm-modal'
															onClick={e => {
																setReturnInfo({
																	user: selectedUser,
																	book: book,
																	mode: 'lost',
																});
																setMsg({ ...msg, text: '' });
																document
																	.getElementById('close-user-info-modal')
																	.click();
															}}
														>
															Lost
														</button>
														<button
															className='btn btn-outline-success mr-2 mb-2'
															data-bs-toggle='modal'
															data-bs-target='#confirm-modal'
															onClick={e => {
																setReturnInfo({
																	user: selectedUser,
																	book: book,
																	mode: 'return',
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
							{returnInfo &&
								returnInfo.user &&
								returnInfo.book &&
								returnInfo.mode && (
									<>
										<div>
											{returnInfo.mode == 'return'
												? 'Are you sure you want to accept the return of this book from this user?'
												: 'Are you sure you want to accept the loss of this book from this user?'}
										</div>

										<table className='table'>
											<thead>
												<tr>
													<th scope='col'>User</th>
													<th scope='col'>Book</th>
													<th scope='col'>Cost</th>
													{returnInfo.mode == 'lost' && (
														<th scope='col'>Note</th>
													)}
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
													{returnInfo.mode == 'lost' && (
														<td className='text-danger'>
															Fee dued to be calculated
														</td>
													)}
												</tr>
											</tbody>
										</table>

										{(returnInfo.book.cost != 0 ||
											returnInfo.mode == 'lost') && (
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
									if (returnInfo && returnInfo.user)
										document
											.getElementById('open-user-info-modal-button')
											.click();
									setSelectedUser(returnInfo.user);
									setReturnInfo({ user: null, book: null, mode: null });
								}}
							>
								{returnInfo && returnInfo.user ? 'Cancel' : 'Close'}
							</button>

							{isReturning ? (
								<span className='btn p-0' style={{ width: '90px' }}>
									<LoadingButton />
								</span>
							) : returnInfo.mode == 'return' ? (
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
							) : returnInfo.mode == 'lost' ? (
								<button
									type='button'
									className={
										'btn btn-danger' +
										(returnInfo && returnInfo.user ? '' : ' disabled')
									}
									onClick={returnBookHandler}
								>
									Accept Loss
								</button>
							) : null}
						</div>
					</div>
				</div>
			</div>

			{users && searchValue === '' && (
				<small className='d-flex justify-content-center text-muted mt-3 mb-3'>
					{'Showing ' +
						(numShow < users.length ? numShow : users.length) +
						' of ' +
						users.length}
				</small>
			)}

			<div className='d-inline d-flex justify-content-center'>
				{users &&
					users.length >= numShow &&
					numShow > NUM_INCREMENTS &&
					searchValue === '' && (
						<button
							className='btn btn-link'
							onClick={() => {
								if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);
								else setNumShow(numShow - NUM_INCREMENTS);
							}}
						>
							Show less
						</button>
					)}

				{users && users.length > numShow && searchValue === '' && (
					<button
						className='btn btn-link'
						onClick={() => {
							if (numShow + NUM_INCREMENTS > users.length)
								setNumShow(users.length);
							else setNumShow(numShow + NUM_INCREMENTS);
						}}
					>
						Show more
					</button>
				)}
			</div>
		</div>
	);
};

export default Users;
