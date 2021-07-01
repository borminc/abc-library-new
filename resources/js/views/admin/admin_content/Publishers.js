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

const Publishers = () => {
	let { path, url } = useRouteMatch();
	const history = useHistory();
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [isLoading, setLoading] = useState(false);

	const [selectedPub, setSelectedPub] = useState();
	const [newPub, setNewPub] = useState('');
	const [publishers, setPublishers] = useState();
	const [isProcessing, setProcessing] = useState(false);

	const [searchValue, setSearchValue] = useState('');
	const NUM_INCREMENTS = 10;
	const [numShow, setNumShow] = useState(NUM_INCREMENTS);

	useEffect(() => {
		getPublishersFromServer();
	}, []);

	const getPublishersFromServer = () => {
		setLoading(true);
		axios
			.get('/api/publishers')
			.then(res => {
				setPublishers(res.data);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const selectPublisherHandler = index => {
		setSelectedPub(publishers[index]);
	};

	const saveEditPublisherHandler = () => {
		setProcessing(true);
		axios
			.patch('/api/publishers/' + selectedPub.id, { name: selectedPub.name })
			.then(res => {
				getPublishersFromServer();
				setMsg({
					text: 'The edit was saved.',
					success: 1,
				});
			})
			.catch(err => {
				console.log(err);
				setMsg({
					text: 'The edit encounted a problem.',
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const saveDeletePublisherHandler = () => {
		if (!selectedPub || (msg && msg.text != '')) {
			// an action was done -> do not send again
			return;
		}
		setProcessing(true);
		axios
			.delete('/api/publishers/' + selectedPub.id)
			.then(res => {
				getPublishersFromServer();
				setMsg({
					text: selectedPub.name + ' was deleted.',
					success: 1,
				});
				setSelectedPub(null);
			})
			.catch(err => {
				console.log(err);
				setMsg({
					text: 'The deletion encounted a problem.',
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const saveAddPublisherHandler = () => {
		if (newPub == '') return;
		setProcessing(true);
		axios
			.post('/api/publishers', { name: newPub })
			.then(res => {
				getPublishersFromServer();
				setMsg({
					text: newPub + ' was successfully added.',
					success: 1,
				});
				setNewPub('');
			})
			.catch(err => {
				console.log(err);
				setMsg({
					text: 'Adding the new publisher encounted a problem.',
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const searchMatches = (item, value) => {
		return (
			item.id == value || item.name.toLowerCase().includes(value.toLowerCase())
		);
	};

	return (
		<div>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>
					All publishers
					<button
						className='btn btn-link'
						data-bs-toggle='modal'
						data-bs-target='#addPublisherModal'
					>
						+
					</button>
				</h4>
				<input
					type='text'
					className='col-lg-8 form-control border-0 small'
					placeholder='Search for id, publisher name...'
					aria-label='Search'
					aria-describedby='basic-addon2'
					onChange={e => {
						setSearchValue(e.target.value);
						if (e.target.value === '') setNumShow(NUM_INCREMENTS);
						else if (publishers && publishers.length > 0)
							setNumShow(publishers.length);
					}}
				/>
			</div>
			<div className='overflow-auto'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Publishers</th>
							<th scope='col'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{publishers &&
							publishers.map((item, i) => {
								if (
									(searchValue &&
										(searchValue == '' || !searchMatches(item, searchValue))) ||
									i + 1 > numShow
								)
									return null;
								else {
									return (
										<tr key={i}>
											<th scope='row'>{item.id}</th>
											<td>{item.name}</td>
											<td>
												<button
													className='btn btn-outline-primary mr-2 mb-1'
													data-bs-toggle='modal'
													data-bs-target='#editPublisherModal'
													onClick={e => {
														selectPublisherHandler(i);
													}}
												>
													Edit
												</button>
												<button
													className='btn btn-outline-danger mb-1'
													data-bs-toggle='modal'
													data-bs-target='#deletePublisherModal'
													onClick={e => {
														selectPublisherHandler(i);
													}}
												>
													Delete
												</button>
											</td>
										</tr>
									);
								}
							})}
					</tbody>
				</table>
			</div>

			{/* Edit Modal */}
			<div
				className='modal fade'
				id='editPublisherModal'
				tabIndex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='editModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='editModalLabel'>
								Edit Publisher
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							{!selectedPub ? (
								<></>
							) : (
								<input
									className='form-control'
									placeholder='Publisher...'
									value={selectedPub.name}
									onChange={e => {
										setSelectedPub({ ...selectedPub, name: e.target.value });
									}}
								/>
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={e => {
									setMsg({ ...msg, text: '' });
									setSelectedPub(null);
								}}
							>
								Close
							</button>
							{isProcessing ? (
								<span className='btn p-0' style={{ width: '90px' }}>
									<LoadingButton />
								</span>
							) : (
								<button
									type='button'
									className='btn btn-primary'
									onClick={saveEditPublisherHandler}
								>
									Save changes
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Delete Modal */}
			<div
				className='modal fade'
				id='deletePublisherModal'
				tabIndex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='deleteModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='deleteModalLabel'>
								Delete Publisher
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							{!selectedPub || (msg && msg.text != '') ? (
								<></>
							) : (
								<p>
									Are you sure you want to delete <b> {selectedPub.name} </b> ?
								</p>
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={e => {
									setMsg({ ...msg, text: '' });
									setSelectedPub(null);
								}}
							>
								Close
							</button>
							{isProcessing ? (
								<span className='btn p-0' style={{ width: '90px' }}>
									<LoadingButton color='danger' />
								</span>
							) : (
								<button
									type='button'
									className={
										'btn btn-danger' +
										(msg && msg.text == '' ? '' : ' disabled')
									}
									onClick={saveDeletePublisherHandler}
								>
									Delete now
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Add Modal */}
			<div
				className='modal fade'
				id='addPublisherModal'
				tabIndex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='addModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='addModalLabel'>
								Add Publisher
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							<input
								className='form-control'
								placeholder='Publisher...'
								value={newPub}
								onChange={e => {
									setNewPub(e.target.value);
								}}
							/>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={e => {
									setMsg({ ...msg, text: '' });
								}}
							>
								Close
							</button>
							{isProcessing ? (
								<span className='btn p-0' style={{ width: '90px' }}>
									<LoadingButton />
								</span>
							) : (
								<button
									type='button'
									className={
										'btn btn-primary' + (newPub == '' ? ' disabled' : '')
									}
									onClick={saveAddPublisherHandler}
								>
									Add Publisher
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{publishers && searchValue === '' && (
				<small className='d-flex justify-content-center text-muted mt-3 mb-3'>
					{'Showing ' +
						(numShow < publishers.length ? numShow : publishers.length) +
						' of ' +
						publishers.length}
				</small>
			)}

			<div className='d-inline d-flex justify-content-center'>
				{publishers &&
					publishers.length >= numShow &&
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

				{publishers && publishers.length > numShow && searchValue === '' && (
					<button
						className='btn btn-link'
						onClick={() => {
							if (numShow + NUM_INCREMENTS > publishers.length)
								setNumShow(publishers.length);
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

export default Publishers;
