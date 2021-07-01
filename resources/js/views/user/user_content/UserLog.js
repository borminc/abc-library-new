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
	const [searchValue, setSearchValue] = useState('');
	const NUM_INCREMENTS = 10;
	const [numShow, setNumShow] = useState(NUM_INCREMENTS);

	useEffect(() => {
		getLogsFromServer();
	}, []);

	const getLogsFromServer = () => {
		setLoading(true);
		axios
			.get('/api/user/logs')
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

	const searchMatches = (item, value) => {
		return (
			item.id == value ||
			item.title.toLowerCase().includes(value.toLowerCase()) ||
			(item.book &&
				item.book.title.toLowerCase().includes(value.toLowerCase())) ||
			item.description.toLowerCase().includes(value.toLowerCase()) ||
			item.date_time.includes(value)
		);
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>All logs</h4>

				<input
					type='text'
					className='col-lg-8 form-control border-0 small'
					placeholder='Search id, title, user, book, description, date...'
					aria-label='Search'
					aria-describedby='basic-addon2'
					onChange={e => {
						setSearchValue(e.target.value);
						if (e.target.value === '') setNumShow(NUM_INCREMENTS);
						else if (logs && logs.length > 0) setNumShow(logs.length);
					}}
				/>
			</div>
			<div className='overflow-auto'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Title</th>
							<th scope='col'>Book</th>
							<th scope='col'>Date/time</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>

					<tbody>
						{logs &&
							logs.map((log, i) => {
								if (
									(searchValue &&
										(searchValue == '' || !searchMatches(log, searchValue))) ||
									i + 1 > numShow
								)
									return null;
								else {
									return (
										<tr key={i}>
											<th scope='row'>{log.id}</th>
											<td>{log.title}</td>
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

			{logs && searchValue === '' && (
				<small className='d-flex justify-content-center text-muted mt-3 mb-3'>
					{'Showing ' +
						(numShow < logs.length ? numShow : logs.length) +
						' of ' +
						logs.length}
				</small>
			)}

			<div className='d-inline d-flex justify-content-center'>
				{logs &&
					logs.length >= numShow &&
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

				{logs && logs.length > numShow && searchValue === '' && (
					<button
						className='btn btn-link'
						onClick={() => {
							if (numShow + NUM_INCREMENTS > logs.length)
								setNumShow(logs.length);
							else setNumShow(numShow + NUM_INCREMENTS);
						}}
					>
						Show more
					</button>
				)}
			</div>

			{isLoading && <Loading height='1vh' size='2rem' />}
		</div>
	);
};

export default Logs;
