import axios from '../../../functions/axios';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import MessageAlert from './../../../components/MessageAlert';
import { setCookie, getCookie, deleteCookie } from '../../../functions/cookies';
import { Loading, LoadingButton } from './../../../components/Loading';

const AdminDashboard = () => {
	const history = useHistory();
	const [books, setBooks] = useState();
	const [isLoading, setLoading] = useState(false);
	const [lowStockBooks, setLowStockBooks] = useState();
	const [lateUsers, setLateUsers] = useState();
	const [totalInfo, setTotalInfo] = useState();
	const [booksDueToday, setBooksDueToday] = useState();

	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [acceptingBookUser, setAcceptingBookUser] = useState();
	const [restockingBook, setRestockingBook] = useState();

	const [addStockAmount, setAddStockAmount] = useState(0);
	const [addStockAmountErr, setAddStockAmountErr] = useState(false);

	useEffect(() => {
		getInfoFromServer();
	}, []);

	const refresh = () => {
		getInfoFromServer();
	};

	const getInfoFromServer = (reload = true) => {
		if (reload) setLoading(true);
		axios
			.all([
				axios.get('/api/borrowed-books'),
				axios.get('/api/low-stock-books'),
				axios.get('/api/late-users'),
				axios.get('/api/total-info'),
				axios.get('/api/books-due-today'),
			])
			.then(
				axios.spread((res1, res2, res3, res4, res5) => {
					setBooks(res1.data);

					let stock = res2.data;
					stock.sort((a, b) => {
						if (a.stock > b.stock) return 1;
						else if (a.stock < b.stock) return -1;
						return 0;
					});
					setLowStockBooks(res2.data);

					setLateUsers(res3.data);
					setTotalInfo(res4.data);
					setBooksDueToday(res5.data);
				})
			)
			.finally(() => {
				if (reload) setLoading(false);
			});
	};

	const returnBookHandler = () => {
		if (
			!acceptingBookUser ||
			!acceptingBookUser.user ||
			!acceptingBookUser.book
		)
			return;

		let late = acceptingBookUser.mode == 'late';
		let lost_late = acceptingBookUser.mode == 'lost-late';
		let lost_due = acceptingBookUser.mode == 'lost-due';
		let url = lost_late || lost_due ? '/api/books/lost' : '/api/books/return';

		axios
			.post(url, {
				user_id: acceptingBookUser.user.id,
				book_id: acceptingBookUser.book.id,
			})
			.then(res => {
				setAcceptingBookUser({ user: null, book: null });
				setMsg({ text: 'The return was successful!', success: 1 });
				getInfoFromServer(false);
			})
			.catch(err => {
				console.log(err);
				setMsg({ text: 'There was a problem: ' + err.response, success: 0 });
			});
	};

	const addStockHandler = () => {
		if (addStockAmountErr) return;
		axios
			.post('/api/add-stock-book', {
				book_id: restockingBook.id,
				stock: addStockAmount,
			})
			.then(res => {
				setAddStockAmount('');
				setRestockingBook(null);
				setMsg({ text: 'Stock added successfully!', success: 1 });
				axios
					.get('/api/low-stock-books')
					.then(res1 => {
						setLowStockBooks(res1.data);
					})
					.catch(err1 => {
						console.log(err);
					});
			})
			.catch(err => {
				console.log(err);
				setMsg({ text: 'There was a problem: ' + err.response, success: 0 });
			});
	};

	if (isLoading) {
		return (
			<div id='page-top'>
				<h4 className='col-lg-4 mb-4'>Admin Dashboard</h4>
				<Loading height='1vh' size='2rem' />
			</div>
		);
	}

	return (
		<div id='page-top'>
			<h4
				className='col-lg-4 mb-4'
				style={{ cursor: 'pointer' }}
				onClick={refresh}
			>
				Admin Dashboard
			</h4>

			<div className='row mt-5 mb-5'>
				<div
					className='col-xl-2 col-md-4 col-sm-6 p-1'
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/admin/books')}
				>
					<div className='card bg-primary text-white mb-4 h-100'>
						<div className='card-body'>
							<div className=''>
								<div>Total Books</div>
								<h1 className=''>
									{(totalInfo && totalInfo.total_books) || '--'}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div
					className='col-xl-2 col-md-4 col-sm-6 p-1'
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/admin/categories')}
				>
					<div className='card bg-primary text-white mb-4 h-100'>
						<div className='card-body'>
							<div className=''>
								<div>Total Categories</div>
								<h1 className=''>
									{(totalInfo && totalInfo.total_categories) || '--'}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div
					className='col-xl-2 col-md-4 col-sm-6 p-1'
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/admin/publishers')}
				>
					<div className='card bg-primary text-white mb-4 h-100'>
						<div className='card-body'>
							<div className=''>
								<div>Total Publishers</div>
								<h1 className=''>
									{(totalInfo && totalInfo.total_publishers) || '--'}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div
					className='col-xl-2 col-md-4 col-sm-6 p-1'
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/admin/users')}
				>
					<div className='card bg-primary text-white mb-4 h-100'>
						<div className='card-body'>
							<div className=''>
								<div>Total Users</div>
								<h1 className=''>
									{(totalInfo && totalInfo.total_users) || '--'}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div
					className='col-xl-2 col-md-4 col-sm-6 p-1'
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/admin/borrowers')}
				>
					<div className='card bg-primary text-white mb-4 h-100'>
						<div className='card-body'>
							<div className=''>
								<div>Total Borrowers</div>
								<h1 className=''>
									{(totalInfo && totalInfo.total_borrowers) || '--'}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Tables */}
			<div className='row'>
				<div className='col-md-6 mb-5'>
					<h6>
						<b className='text-primary'>
							Books due today: {(booksDueToday && booksDueToday.length) || 0}
						</b>
					</h6>

					<div>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>ID</th>
									<th scope='col'>Title</th>
									<th scope='col'>Users</th>
								</tr>
							</thead>
							<tbody>
								{booksDueToday && booksDueToday.length > 0 ? (
									booksDueToday.map((book, i) => (
										<tr key={i}>
											<th scope='row'>{book.id}</th>
											<td>{book.title}</td>
											<td>
												<a
													className='text-primary'
													role='button'
													data-bs-toggle='modal'
													data-bs-target={'#modalDue' + book.id}
													id={'modalDueOpenBtn-' + book.id}
												>
													{book.users.length}
												</a>

												{/* Modal */}
												<div
													className='modal fade'
													id={'modalDue' + book.id}
													tabIndex='-1'
													aria-labelledby={'#modalLabelDue' + book.id}
													aria-hidden='true'
												>
													<div
														className='modal-dialog modal-lg modal-dialog-scrollable'
														role='document'
													>
														<div className='modal-content'>
															<div className='modal-header'>
																<h5
																	className='modal-title'
																	id={'#modalLabelDue' + book.id}
																>
																	{book.title}
																</h5>
																<button
																	type='button'
																	className='btn-close'
																	data-bs-dismiss='modal'
																	aria-label='Close'
																	id={'dueBooksModalCloseBtn-' + book.id}
																></button>
															</div>
															<div className='modal-body'>
																<h6>Users to return this book today: </h6>
																<table className='table'>
																	<thead>
																		<tr>
																			<th scope='col'>ID</th>
																			<th scope='col'>Name</th>
																			<th scope='col'>Borrow Date</th>
																			<th scope='col'>Action</th>
																		</tr>
																	</thead>
																	<tbody>
																		{book.users.map((user, i) => (
																			<tr key={i}>
																				<th scope='row'>{user.id}</th>
																				<td>{user.name}</td>
																				<td>{user.borrow_date}</td>
																				<td>
																					<button
																						type='button'
																						className='btn btn-outline-danger mr-2 mb-2'
																						data-bs-toggle='modal'
																						data-bs-target='#confirmReturnModal'
																						onClick={() => {
																							document
																								.getElementById(
																									'dueBooksModalCloseBtn-' +
																										book.id
																								)
																								.click();
																							setAcceptingBookUser({
																								book: book,
																								user: user,
																								mode: 'lost-due',
																							});
																							setMsg({ ...msg, text: '' });
																						}}
																					>
																						Lost
																					</button>
																					<button
																						type='button'
																						className='btn btn-outline-success mb-2'
																						data-bs-toggle='modal'
																						data-bs-target='#confirmReturnModal'
																						onClick={() => {
																							document
																								.getElementById(
																									'dueBooksModalCloseBtn-' +
																										book.id
																								)
																								.click();
																							setAcceptingBookUser({
																								book: book,
																								user: user,
																								mode: 'due',
																							});
																							setMsg({ ...msg, text: '' });
																						}}
																					>
																						Accept return
																					</button>
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
									))
								) : (
									<tr>
										<td>No data</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>

				<div className='col-md-6 mb-5'>
					<h6>
						<b className='text-primary'>
							Late users: {lateUsers ? lateUsers.length : 0}
						</b>
					</h6>

					<div>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>ID</th>
									<th scope='col'>Name</th>
									<th scope='col'>Books</th>
								</tr>
							</thead>
							<tbody>
								{lateUsers && lateUsers.length > 0 ? (
									lateUsers.map((user, i) => (
										<tr key={i}>
											<th scope='row'>{user.id}</th>
											<td>{user.name}</td>
											<td>
												<a
													className='text-primary'
													role='button'
													data-bs-toggle='modal'
													data-bs-target={'#modalLate' + user.id}
													id={'modalLateOpenBtn-' + user.id}
												>
													{user.late_books.length}
												</a>

												{/* Modal */}
												<div
													className='modal fade'
													id={'modalLate' + user.id}
													tabIndex='-1'
													aria-labelledby={'#modalLabelLate' + user.id}
													aria-hidden='true'
												>
													<div
														className='modal-dialog modal-lg modal-dialog-scrollable'
														role='document'
													>
														<div className='modal-content'>
															<div className='modal-header'>
																<h5
																	className='modal-title'
																	id={'#modalLabelLate' + user.id}
																>
																	{user.name}
																</h5>
																<button
																	type='button'
																	className='btn-close'
																	data-bs-dismiss='modal'
																	aria-label='Close'
																	id={'lateBooksModalCloseBtn-' + user.id}
																></button>
															</div>
															<div className='modal-body'>
																<h6>
																	Books that this user is late to return:{' '}
																</h6>
																<table className='table'>
																	<thead>
																		<tr>
																			<th scope='col'>ID</th>
																			<th scope='col'>Title</th>
																			<th scope='col'>Borrow date</th>
																			<th scope='col'>Return date</th>
																			<th scope='col'>Days late</th>
																			<th scope='col'>Cost</th>
																			<th scope='col'>Action</th>
																		</tr>
																	</thead>
																	<tbody>
																		{user.late_books.map((book, i) => (
																			<tr key={i}>
																				<th scope='row'>{book.id}</th>
																				<td>{book.title}</td>
																				<td>{book.borrow_date}</td>
																				<td className='text-danger'>
																					{book.return_date}
																				</td>
																				<td className='text-danger'>
																					{book.days_late}
																				</td>
																				<td className='text-danger'>
																					${book.cost}
																				</td>
																				<td>
																					<button
																						type='button'
																						className='btn btn-outline-danger mr-2 mb-2'
																						data-bs-toggle='modal'
																						data-bs-target='#confirmReturnModal'
																						onClick={() => {
																							document
																								.getElementById(
																									'lateBooksModalCloseBtn-' +
																										user.id
																								)
																								.click();
																							setAcceptingBookUser({
																								book: book,
																								user: user,
																								mode: 'lost-late',
																							});
																							setMsg({ ...msg, text: '' });
																						}}
																					>
																						Lost
																					</button>
																					<button
																						type='button'
																						className='btn btn-outline-success mb-2'
																						data-bs-toggle='modal'
																						data-bs-target='#confirmReturnModal'
																						onClick={() => {
																							document
																								.getElementById(
																									'lateBooksModalCloseBtn-' +
																										user.id
																								)
																								.click();
																							setAcceptingBookUser({
																								book: book,
																								user: user,
																								mode: 'late',
																							});
																							setMsg({ ...msg, text: '' });
																						}}
																					>
																						Accept return
																					</button>
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
									))
								) : (
									<tr>
										<td>No data</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>

				<div className='col-md-6 mb-5'>
					<h6>
						<b className='text-primary'>
							Currently borrowed books: {(books && books.length) || 0}
						</b>
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
								{books && books.length > 0 ? (
									books.map((book, i) => (
										<tr key={i}>
											<th scope='row'>{book.id}</th>
											<td>{book.title}</td>
											<td>{book.stock}</td>
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
									))
								) : (
									<tr>
										<td>No data</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>

				<div className='col-md-6 mb-5'>
					<h6>
						<b className='text-primary'>
							Low stock: {lowStockBooks ? lowStockBooks.length : 0}
						</b>
					</h6>

					<div>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>ID</th>
									<th scope='col'>Title</th>
									<th scope='col'>Stock</th>
									<th scope='col'>Action</th>
								</tr>
							</thead>
							<tbody>
								{lowStockBooks && lowStockBooks.length > 0 ? (
									lowStockBooks.map((book, i) => (
										<tr key={i}>
											<th scope='row'>{book.id}</th>
											<td>{book.title}</td>
											<td className={book.stock <= 0 ? 'text-danger' : ''}>
												{book.stock}
											</td>
											<td>
												<button
													type='button'
													className='btn btn-primary'
													data-bs-toggle='modal'
													data-bs-target='#addStockModal'
													onClick={() => {
														setRestockingBook(book);
														setMsg({
															text: '',
															success: 1,
														});
														setAddStockAmount('');
														setAddStockAmountErr(false);
													}}
												>
													Add
												</button>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td>No data</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* <!-- Confirm returnModal --> */}
			<div
				className='modal fade'
				id='confirmReturnModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
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
							{acceptingBookUser &&
								acceptingBookUser.book &&
								acceptingBookUser.user && (
									<div>
										<div>
											{acceptingBookUser.mode == 'lost-due' ||
											acceptingBookUser.mode == 'lost-late'
												? 'Are you sure you want to accept the loss of this book from this user?'
												: 'Are you sure you want to accept the return of this book from this user?'}
										</div>
										<table className='table'>
											<thead>
												<tr>
													<th scope='col'>User</th>
													<th scope='col'>Book</th>
													{acceptingBookUser.mode == 'late' && <th>Cost</th>}
													{(acceptingBookUser.mode == 'lost-due' ||
														acceptingBookUser.mode == 'lost-late') && (
														<th>Note</th>
													)}
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>{acceptingBookUser.user.name}</td>
													<td>{acceptingBookUser.book.title}</td>
													{acceptingBookUser.mode == 'late' && (
														<th className='text-danger'>
															${acceptingBookUser.book.cost}
														</th>
													)}
													{(acceptingBookUser.mode == 'lost-due' ||
														acceptingBookUser.mode == 'lost-late') && (
														<th className='text-danger'>
															Fee dued to be calculated.
														</th>
													)}
												</tr>
											</tbody>
										</table>
										{((acceptingBookUser.mode == 'late' &&
											acceptingBookUser.book.cost > 0) ||
											acceptingBookUser.mode == 'lost-due' ||
											acceptingBookUser.mode == 'lost-late') && (
											<p className='text-danger'>
												*Make sure all fees are paid before acepting.
											</p>
										)}
									</div>
								)}
						</div>

						{acceptingBookUser &&
							acceptingBookUser.book &&
							acceptingBookUser.user && (
								<div className='modal-footer'>
									<button
										type='button'
										className='btn btn-secondary'
										data-bs-dismiss='modal'
										onClick={() => {
											if (
												acceptingBookUser.mode == 'late' ||
												acceptingBookUser.mode == 'lost-late'
											) {
												document
													.getElementById(
														'modalLateOpenBtn-' + acceptingBookUser.user.id
													)
													.click();
											} else if (
												acceptingBookUser.mode == 'due' ||
												acceptingBookUser.mode == 'lost-due'
											) {
												document
													.getElementById(
														'modalDueOpenBtn-' + acceptingBookUser.book.id
													)
													.click();
											}

											setAcceptingBookUser({ user: null, book: null });
										}}
									>
										Cancel
									</button>

									{acceptingBookUser.mode == 'lost-due' ||
									acceptingBookUser.mode == 'lost-late' ? (
										<button
											type='button'
											className='btn btn-danger'
											onClick={returnBookHandler}
										>
											Accept Loss
										</button>
									) : (
										<button
											type='button'
											className='btn btn-success'
											onClick={returnBookHandler}
										>
											Accept Now
										</button>
									)}
								</div>
							)}
					</div>
				</div>
			</div>

			{/* Add stock modal */}
			<div
				className='modal fade'
				id='addStockModal'
				tabIndex='-1'
				aria-labelledby='addStockModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='addStockModalLabel'>
								Add Stock
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
							{restockingBook && restockingBook.title && (
								<div>
									<p>Add stock for: {restockingBook.title}</p>
									<div className='d-flex'>
										<input
											type='text'
											className={
												'form-control mr-2' +
												(addStockAmountErr ? ' is-invalid' : '')
											}
											value={addStockAmount}
											onChange={e => {
												if (
													e.target.value == '' ||
													e.target.value < 0 ||
													isNaN(e.target.value)
												) {
													setAddStockAmountErr(true);
												} else {
													setAddStockAmountErr(false);
												}
												setAddStockAmount(e.target.value);
											}}
										/>
										<div
											className='btn-group me-2'
											role='group'
											aria-label='First group'
										>
											<button
												type='button'
												className={
													'btn btn-outline-secondary' +
													(addStockAmountErr ? ' disabled' : '')
												}
												onClick={() => {
													if (!addStockAmountErr && addStockAmount != 0)
														setAddStockAmount(+addStockAmount - 1);
												}}
											>
												-
											</button>
											<button
												type='button'
												className={
													'btn btn-outline-secondary' +
													(addStockAmountErr ? ' disabled' : '')
												}
												onClick={() => {
													if (!addStockAmountErr)
														setAddStockAmount(+addStockAmount + 1);
												}}
											>
												+
											</button>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Close
							</button>
							<button
								type='button'
								className={
									'btn btn-primary' +
									(addStockAmountErr || addStockAmount == '' ? ' disabled' : '')
								}
								onClick={addStockHandler}
							>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
