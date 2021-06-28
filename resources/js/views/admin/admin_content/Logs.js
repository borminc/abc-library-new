import axios from '../../../functions/axios';
import { hasIn, set } from 'lodash';
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

const Logs = () => {
	const [isLoading, setLoading] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [logs, setLogs] = useState();
	const [searchValue, setSearchValue] = useState();
	const [addErrors, setAddErrors] = useState({
		title: false,
		user_id: false,
		book_id: false,
		description: false,
	});

	const [newLog, setNewLog] = useState({
		title: '',
		user_id: '',
		book_id: '',
		description: '',
	});

	const [users, setUsers] = useState();
	const [books, setBooks] = useState();

	useEffect(() => {
		getLogsFromServer();
		getUsersFromServer();
		getBooksFromServer();
	}, []);

	const getUsersFromServer = () => {
		axios
			.get('/api/users-names')
			.then(res => {
				setUsers(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getBooksFromServer = () => {
		axios
			.get('/api/books-titles')
			.then(res => {
				setBooks(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getLogsFromServer = () => {
		setLoading(true);
		axios
			.get('/api/logs')
			.then(res => {
				setLogs(res.data);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const hasInputErrors = () => {
		if (
			newLog.title === '' ||
			newLog.user_id === '' ||
			newLog.description === ''
		)
			return true;
		return false;
	};

	const addLogHandler = () => {
		if (hasInputErrors()) return;

		axios
			.post('/api/logs', newLog)
			.then(res => {
				setMsg({ text: 'Successfully added new log!', success: 1 });
				setNewLog({
					title: '',
					user_id: '',
					book_id: '',
					description: '',
				});
				getLogsFromServer();
			})
			.catch(err => {
				console.log(err);
				setMsg({ text: 'There was a problem: ' + err.response, success: 0 });
			});
	};

	const searchMatches = (item, value) => {
		return (
			item.id == value ||
			item.title.toLowerCase().includes(value.toLowerCase()) ||
			item.user.name.toLowerCase().includes(value.toLowerCase()) ||
			(item.book &&
				item.book.title.toLowerCase().includes(value.toLowerCase())) ||
			item.description.toLowerCase().includes(value.toLowerCase()) ||
			item.date_time.includes(value)
		);
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>
					All logs
					<button
						className='btn btn-link'
						data-bs-toggle='modal'
						data-bs-target='#addLogModal'
						onClick={e => {
							setMsg({ text: '', success: 1 });
							setAddErrors({
								title: false,
								user_id: false,
								book_id: false,
								description: false,
							});
							setNewLog({
								title: '',
								user_id: '',
								book_id: '',
								description: '',
							});
						}}
					>
						+
					</button>
				</h4>

				<input
					type='text'
					className='col-lg-8 form-control border-0 small'
					placeholder='Search id, title, user, book, description, date...'
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
							<th scope='col'>Title</th>
							<th scope='col'>User</th>
							<th scope='col'>Book</th>
							<th scope='col'>Date/time</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>
					<tbody>
						{logs &&
							logs.map((log, i) => {
								if (
									searchValue &&
									(searchValue == '' || !searchMatches(log, searchValue))
								)
									return null;
								else {
									return (
										<tr key={i}>
											<th scope='row'>{log.id}</th>
											<td>{log.title}</td>
											<td>{log.user.name}</td>
											<td>{log.book ? log.book.title : 'n/a'}</td>
											<td>{log.date_time}</td>
											<td>
												<button
													type='button'
													className='btn btn-outline-primary'
													data-bs-toggle='modal'
													data-bs-target={'#logInfoModal-' + log.id}
												>
													More info
												</button>

												<div
													className='modal fade'
													id={'logInfoModal-' + log.id}
													tabIndex='-1'
													aria-labelledby={'logInfoModalLabel-' + log.id}
													aria-hidden='true'
												>
													<div className='modal-dialog'>
														<div className='modal-content'>
															<div className='modal-header'>
																<h5
																	className='modal-title'
																	id={'logInfoModalLabel-' + log.id}
																>
																	{log.id}
																</h5>
																<button
																	type='button'
																	className='btn-close'
																	data-bs-dismiss='modal'
																	aria-label='Close'
																></button>
															</div>
															<div className='modal-body'>
																<table className='table'>
																	<tbody>
																		<tr>
																			<td>Title</td>
																			<td>{log.title}</td>
																		</tr>
																		<tr>
																			<td>User</td>
																			<td>{log.user.name}</td>
																		</tr>
																		<tr>
																			<td>Book</td>
																			<td>
																				{log.book ? log.book.title : 'n/a'}
																			</td>
																		</tr>
																		<tr>
																			<td>Description</td>
																			<td>{log.description}</td>
																		</tr>
																		<tr>
																			<td>Date/time</td>
																			<td>{log.date_time}</td>
																		</tr>
																	</tbody>
																</table>
															</div>
															<div className='modal-footer'>
																<button
																	type='button'
																	className='btn btn-secondary'
																	data-bs-dismiss='modal'
																>
																	Close
																</button>
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

			{isLoading && <Loading height='1vh' size='2rem' />}

			<div
				className='modal fade'
				id='addLogModal'
				tabIndex='-1'
				aria-labelledby='addLogModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='addLogModalLabel'>
								Add log
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
							<small>Title</small>
							<input
								className={
									'form-control mb-2' + (addErrors.title ? ' is-invalid' : '')
								}
								placeholder='Title'
								value={newLog.title}
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, title: true });
									} else {
										setAddErrors({ ...addErrors, title: false });
									}
									setNewLog({ ...newLog, title: e.target.value });
								}}
							/>

							<small>User</small>
							<select
								className={
									'form-control mb-2' + (addErrors.user_id ? ' is-invalid' : '')
								}
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, user_id: true });
									} else {
										setAddErrors({ ...addErrors, user_id: false });
									}
									setNewLog({ ...newLog, user_id: e.target.value });
								}}
								value={newLog.user_id}
							>
								<option value='' defaultValue>
									Select user
								</option>
								{users &&
									users.map((user, i) => (
										<option value={user.id} key={i}>
											{user.id} - {user.name}
										</option>
									))}
							</select>

							<small>Book</small>
							<select
								className={
									'form-control mb-2' + (addErrors.book_id ? ' is-invalid' : '')
								}
								onChange={e => {
									setNewLog({ ...newLog, book_id: e.target.value });
								}}
								value={newLog.book_id}
							>
								<option value='' defaultValue>
									Select book (optional)
								</option>
								{books &&
									books.map((book, i) => (
										<option value={book.id} key={i}>
											{book.id} - {book.title}
										</option>
									))}
							</select>

							<small>Description</small>
							<textarea
								className={
									'form-control mb-2' +
									(addErrors.description ? ' is-invalid' : '')
								}
								placeholder='Description'
								value={newLog.description}
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, description: true });
									} else {
										setAddErrors({ ...addErrors, description: false });
									}
									setNewLog({ ...newLog, description: e.target.value });
								}}
							/>
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
									'btn btn-primary' + (hasInputErrors() ? ' disabled' : '')
								}
								onClick={addLogHandler}
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

export default Logs;
