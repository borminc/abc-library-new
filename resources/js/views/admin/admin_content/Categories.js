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

const Categories = () => {
	let { path, url } = useRouteMatch();
	const history = useHistory();
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [isLoading, setLoading] = useState(false);

	const [selectedCat, setSelectedCat] = useState();
	const [newCat, setNewCat] = useState('');
	const [categories, setCategories] = useState();
	const [isProcessing, setProcessing] = useState(false);

	const [searchValue, setSearchValue] = useState();

	useEffect(() => {
		getCategoriesFromServer();
	}, []);

	const getCategoriesFromServer = () => {
		setLoading(true);
		axios
			.get('/api/categories')
			.then(res => {
				setCategories(res.data);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const selectCategoryHandler = index => {
		setSelectedCat(categories[index]);
	};

	const saveEditCategoryHandler = () => {
		setProcessing(true);
		axios
			.patch('/api/categories/' + selectedCat.id, { name: selectedCat.name })
			.then(res => {
				getCategoriesFromServer();
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

	const saveDeleteCategoryHandler = () => {
		if (!selectedCat || (msg && msg.text != '')) {
			// an action was done -> do not send again
			return;
		}
		setProcessing(true);
		axios
			.delete('/api/categories/' + selectedCat.id)
			.then(res => {
				getCategoriesFromServer();
				setMsg({
					text: selectedCat.name + ' was deleted.',
					success: 1,
				});
				setSelectedCat(null);
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

	const saveAddCategoryHandler = () => {
		if (newCat == '') return;
		setProcessing(true);
		axios
			.post('/api/categories', { name: newCat })
			.then(res => {
				getCategoriesFromServer();
				setMsg({
					text: newCat + ' was successfully added.',
					success: 1,
				});
				setNewCat('');
			})
			.catch(err => {
				console.log(err);
				setMsg({
					text: 'Adding the new category encounted a problem.',
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
		<div className='overflow-auto'>
			<div className='row mt-2 mb-2'>
				<h4 className='col-lg-4'>All categories</h4>
				<input
					type='text'
					className='col-lg-8 form-control bg-none border-0 small'
					placeholder='Search for id, category name...'
					aria-label='Search'
					aria-describedby='basic-addon2'
					onChange={e => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>
							Categories
							<button
								className='btn btn-link'
								data-bs-toggle='modal'
								data-bs-target='#addCategoryModal'
							>
								+
							</button>
						</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{categories &&
						categories.map((item, i) => {
							if (
								searchValue &&
								(searchValue == '' || !searchMatches(item, searchValue))
							)
								return null;
							else {
								return (
									<tr key={i}>
										<th scope='row'>{item.id}</th>
										<td>{item.name}</td>
										<td>
											<button
												className='btn btn-outline-primary'
												data-bs-toggle='modal'
												data-bs-target='#editCategoryModal'
												onClick={e => {
													selectCategoryHandler(i);
												}}
											>
												Edit
											</button>
											<button
												className='btn btn-outline-danger ml-2'
												data-bs-toggle='modal'
												data-bs-target='#deleteCategoryModal'
												onClick={e => {
													selectCategoryHandler(i);
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

			{/* Edit Modal */}
			<div
				className='modal fade'
				id='editCategoryModal'
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
								Edit Category
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							{!selectedCat ? (
								<></>
							) : (
								<input
									className='form-control'
									placeholder='Category...'
									value={selectedCat.name}
									onChange={e => {
										setSelectedCat({ ...selectedCat, name: e.target.value });
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
									setSelectedCat(null);
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
									onClick={saveEditCategoryHandler}
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
				id='deleteCategoryModal'
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
								Delete Category
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							{!selectedCat || (msg && msg.text != '') ? (
								<></>
							) : (
								<p>
									Are you sure you want to delete <b> {selectedCat.name} </b> ?
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
									setSelectedCat(null);
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
									onClick={saveDeleteCategoryHandler}
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
				id='addCategoryModal'
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
								Add Category
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							<input
								className='form-control'
								placeholder='Category...'
								value={newCat}
								onChange={e => {
									setNewCat(e.target.value);
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
										'btn btn-primary' + (newCat == '' ? ' disabled' : '')
									}
									onClick={saveAddCategoryHandler}
								>
									Add category
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

export default Categories;
