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

const Books = () => {
	const UPLOAD_API = 'https://api.cloudinary.com/v1_1/bormin/image/upload';
	const UPLOAD_PRESET = 'abc_admin_uploads';

	let { path, url } = useRouteMatch();
	const history = useHistory();

	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [isLoading, setLoading] = useState(false);

	const [categories, setCategories] = useState();
	const [publishers, setPublishers] = useState();
	const [books, setBooks] = useState();
	const [selectedBook, setSelectedBook] = useState();

	const [fileName, setFileName] = useState();
	const [isProcessing, setProcessing] = useState(false);

	const [searchValue, setSearchValue] = useState('');
	const NUM_INCREMENTS = 10;
	const [numShow, setNumShow] = useState(NUM_INCREMENTS);

	const [newBook, setNewBook] = useState({
		title: '',
		author: '',
		description: '',
		publisher_id: '',
		year: '',
		image: '',
		category_id: '',
		stock: '',
	});
	const [addErrors, setAddErrors] = useState({
		title: false,
		author: false,
		description: false,
		publisher_id: false,
		year: false,
		image: false,
		category_id: false,
		stock: false,
	});
	const [editErrors, setEditErrors] = useState({
		title: false,
		author: false,
		description: false,
		publisher_id: false,
		year: false,
		image: false,
		category_id: false,
		stock: false,
	});

	const [sortType, setSortType] = useState('');

	useEffect(() => {
		if (books && sortType) sortArray(sortType);
	}, [sortType]);

	const sortArray = type => {
		const types = {
			id: 'id',
			title: 'title',
			author: 'author',
			year: 'year',
			stock: 'stock',
		};
		const sortProperty = types[type];
		const sorted = [...books].sort((a, b) => {
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
		setBooks(sorted);
	};

	useEffect(() => {
		getCategoriesFromServer();
		getPublishersFromServer();
		getBooksFromServer();
	}, []);

	const refresh = () => {
		getCategoriesFromServer();
		getPublishersFromServer();
		getBooksFromServer();
		setSortType('');
	};

	const clearNewBook = () => {
		setNewBook({
			title: '',
			author: '',
			description: '',
			publisher_id: '',
			year: '',
			image: '',
			category_id: '',
			stock: '',
		});
		setFileName('');
	};

	const getCategoriesFromServer = () => {
		axios.get('/api/categories').then(res => {
			const data = res.data;
			const sorted = [...data].sort((a, b) => {
				const _a = a.name.toLowerCase();
				const _b = b.name.toLowerCase();
				if (_a > _b) return 1;
				else if (_a < _b) return -1;
				return 0;
			});
			setCategories(sorted);
		});
	};

	const getPublishersFromServer = () => {
		axios.get('/api/publishers').then(res => {
			const data = res.data;
			const sorted = [...data].sort((a, b) => {
				const _a = a.name.toLowerCase();
				const _b = b.name.toLowerCase();
				if (_a > _b) return 1;
				else if (_a < _b) return -1;
				return 0;
			});
			setPublishers(sorted);
		});
	};

	const getBooksFromServer = () => {
		setLoading(true);
		axios
			.get('/api/books')
			.then(res => {
				setBooks(res.data);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const imageUploadAddBookHandler = e => {
		setFileName(e.target.files[0].name);
		setProcessing(true);

		var formData = new FormData();
		formData.append('file', e.target.files[0]);
		formData.append('upload_preset', UPLOAD_PRESET);

		axios
			.post(UPLOAD_API, formData, {
				headers: {
					Authorization: 'NONE',
				},
			})
			.then(res => {
				setNewBook({ ...newBook, image: res.data.secure_url });
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const imageUploadEditBookHandler = e => {
		setFileName(e.target.files[0].name);
		setProcessing(true);

		var formData = new FormData();
		formData.append('file', e.target.files[0]);
		formData.append('upload_preset', UPLOAD_PRESET);

		axios
			.post(UPLOAD_API, formData, {
				headers: {
					Authorization: 'NONE',
				},
			})
			.then(res => {
				setSelectedBook({ ...selectedBook, image: res.data.secure_url });
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const hasInputErrors = () => {
		if (
			newBook.title === '' ||
			newBook.author === '' ||
			newBook.description === '' ||
			newBook.publisher_id === '' ||
			newBook.year === '' ||
			newBook.category_id === '' ||
			newBook.stock === ''
		)
			return true;
		return false;
	};

	const editHasInputErrors = () => {
		if (
			selectedBook.title == '' ||
			selectedBook.author === '' ||
			selectedBook.description === '' ||
			selectedBook.publisher_id === '' ||
			selectedBook.year === '' ||
			selectedBook.category_id === '' ||
			selectedBook.stock === '' ||
			selectedBook.stock < 0
		)
			return true;
		return false;
	};

	const selectBookHandler = index => {
		setSelectedBook(books[index]);
	};

	const saveAddBookHandler = () => {
		setMsg({ text: '', success: 1 });

		if (hasInputErrors()) {
			setMsg({ text: 'Fill in all fields.', success: 0 });
			return;
		}

		setProcessing(true);
		axios
			.post('/api/books', newBook)
			.then(res => {
				getBooksFromServer();
				setMsg({
					text: newBook.title + ' was added successfully.',
					success: 1,
				});
				clearNewBook();
			})
			.catch(err => {
				console.log(err.response);
				setMsg({
					text: 'There was a problem adding the new book. Make sure inputs are correct.',
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const saveEditBookHandler = () => {
		setMsg({ text: '', success: 1 });

		if (editHasInputErrors()) {
			setMsg({ text: 'Fill in all fields.', success: 0 });
			return;
		}

		setProcessing(true);
		axios
			.patch('/api/books/' + selectedBook.id, selectedBook)
			.then(res => {
				getBooksFromServer();
				setMsg({
					text: selectedBook.title + ' was edited successfully.',
					success: 1,
				});
			})
			.catch(err => {
				console.log(err.response);
				setMsg({
					text: 'There was a problem saving the changes.',
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	const saveDeleteBookHandler = () => {
		if (!selectedBook || (msg && msg.text != '')) {
			// an action was done -> do not send again
			return;
		}
		setProcessing(true);
		axios
			.delete('/api/books/' + selectedBook.id)
			.then(res => {
				getBooksFromServer();
				setMsg({
					text: selectedBook.title + ' was deleted.',
					success: 1,
				});
				setSelectedBook(null);
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

	const searchMatches = (item, value) => {
		return (
			item.id == value ||
			item.title.toLowerCase().includes(value.toLowerCase()) ||
			item.author.toLowerCase().includes(value.toLowerCase()) ||
			item.publisher.name.toLowerCase().includes(value.toLowerCase()) ||
			item.year == value ||
			item.category.name.toLowerCase().includes(value.toLowerCase())
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
					All books
					<button
						className='btn btn-link'
						data-bs-toggle='modal'
						data-bs-target='#addBookModal'
						onClick={e => {
							setMsg({ text: '', success: 1 });
						}}
					>
						+
					</button>
				</h4>

				<input
					type='text'
					className='col-lg-8 form-control border-0 small'
					placeholder='Search for id, title, author, publisher, year, category...'
					aria-label='Search'
					aria-describedby='basic-addon2'
					onChange={e => {
						setSearchValue(e.target.value);
						if (e.target.value === '') setNumShow(NUM_INCREMENTS);
						else if (books && books.length > 0) setNumShow(books.length);
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
									(sortType === 'title' ? 'text-primary' : '')
								}
								onClick={() => setSortType('title')}
							>
								Title
							</th>
							<th
								scope='col'
								style={{ cursor: 'pointer' }}
								className={
									'dropdown-toggle ' +
									(sortType === 'author' ? 'text-primary' : '')
								}
								onClick={() => setSortType('author')}
							>
								Author
							</th>
							<th scope='col'>Publisher</th>
							<th
								scope='col'
								style={{ cursor: 'pointer' }}
								className={
									'dropdown-toggle ' +
									(sortType === 'year' ? 'text-primary' : '')
								}
								onClick={() => setSortType('year')}
							>
								Year
							</th>
							<th scope='col'>Category</th>
							<th
								scope='col'
								style={{ cursor: 'pointer' }}
								className={
									'dropdown-toggle ' +
									(sortType === 'stock' ? 'text-primary' : '')
								}
								onClick={() => setSortType('stock')}
							>
								Stock
							</th>
							<th scope='col'>Actions</th>
						</tr>
					</thead>

					<tbody>
						{books &&
							books.map((item, i) => {
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
											<td>{item.title}</td>
											<td>{item.author}</td>
											<td>{item.publisher.name}</td>
											<td>{item.year}</td>
											<td>{item.category.name}</td>
											<td>{item.stock}</td>
											<td>
												<button
													className='btn btn-outline-primary mr-2 mb-1'
													data-bs-toggle='modal'
													data-bs-target='#editBookModal'
													onClick={e => {
														selectBookHandler(i);
														setEditErrors({
															title: false,
															author: false,
															description: false,
															publisher_id: false,
															year: false,
															image: false,
															category_id: false,
															stock: false,
														});
														setFileName('');
														setMsg({ ...msg, text: '' });
													}}
												>
													Edit
												</button>
												<button
													className='btn btn-outline-danger mb-1'
													data-bs-toggle='modal'
													data-bs-target='#deleteBookModal'
													onClick={e => {
														selectBookHandler(i);
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

			{/* --------------------------------- Add Modal ---------------------------------*/}
			<div
				className='modal fade'
				id='addBookModal'
				role='dialog'
				tabIndex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='addModalLabel'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-lg modal-dialog-scrollable'
					role='document'
				>
					<div className='modal-content'>
						<div className='modal-header align-items-center'>
							<h5 className='modal-title' id='addModalLabel'>
								Add Book
							</h5>
							<div>
								{isProcessing ? (
									<span className='btn p-0' style={{ width: '90px' }}>
										<LoadingButton />
									</span>
								) : (
									<button
										type='button'
										className={
											'btn btn-primary' +
											(addErrors.title ||
											addErrors.author ||
											addErrors.description ||
											addErrors.publisher_id ||
											addErrors.year ||
											addErrors.image ||
											addErrors.category_id ||
											addErrors.stock
												? ' disabled'
												: '')
										}
										style={{ width: '90px' }}
										onClick={saveAddBookHandler}
									>
										Add
									</button>
								)}
								<button
									type='button'
									className='ml-2 btn btn-secondary'
									data-bs-dismiss='modal'
									onClick={e => {
										setMsg({ ...msg, text: '' });
										clearNewBook();
									}}
								>
									Close
								</button>
							</div>
						</div>
						<div className='modal-body'>
							<small>Title</small>
							<input
								className={
									'form-control mb-2' + (addErrors.title ? ' is-invalid' : '')
								}
								placeholder='Title'
								value={newBook.title}
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, title: true });
									} else {
										setAddErrors({ ...addErrors, title: false });
									}
									setNewBook({ ...newBook, title: e.target.value });
								}}
							/>
							<small>Author</small>
							<input
								className={
									'form-control mb-2' + (addErrors.author ? ' is-invalid' : '')
								}
								placeholder='Author'
								value={newBook.author}
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, author: true });
									} else {
										setAddErrors({ ...addErrors, author: false });
									}
									setNewBook({ ...newBook, author: e.target.value });
								}}
							/>
							<small>Description</small>
							<textarea
								className={
									'form-control mb-2' +
									(addErrors.description ? ' is-invalid' : '')
								}
								placeholder='Description...'
								value={newBook.description}
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, description: true });
									} else {
										setAddErrors({ ...addErrors, description: false });
									}
									setNewBook({ ...newBook, description: e.target.value });
								}}
							></textarea>

							<small>Publisher</small>
							<select
								className={
									'form-control mb-2' +
									(addErrors.publisher_id ? ' is-invalid' : '')
								}
								id='publisherSelector'
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, publisher_id: true });
									} else {
										setAddErrors({ ...addErrors, publisher_id: false });
									}
									setNewBook({ ...newBook, publisher_id: e.target.value });
								}}
								value={newBook.publisher_id}
							>
								<option defaultValue value=''>
									Publisher...
								</option>
								{publishers &&
									publishers.map((item, index) => (
										<option key={index} value={item.id}>
											{item.name}
										</option>
									))}
							</select>

							<small>Year</small>
							<input
								className={
									'form-control mb-2' + (addErrors.year ? ' is-invalid' : '')
								}
								placeholder='Year'
								value={newBook.year}
								onChange={e => {
									if (e.target.value == '' || isNaN(e.target.value)) {
										setAddErrors({ ...addErrors, year: true });
									} else {
										setAddErrors({ ...addErrors, year: false });
									}
									setNewBook({ ...newBook, year: e.target.value });
								}}
							/>
							<small>Category</small>
							<select
								className={
									'form-control mb-2' +
									(addErrors.category_id ? ' is-invalid' : '')
								}
								id='categorySelector'
								onChange={e => {
									if (e.target.value == '') {
										setAddErrors({ ...addErrors, category_id: true });
									} else {
										setAddErrors({ ...addErrors, category_id: false });
									}
									setNewBook({ ...newBook, category_id: e.target.value });
								}}
								value={newBook.category_id}
							>
								<option defaultValue value=''>
									Category...
								</option>
								{categories &&
									categories.map((item, index) => (
										<option key={index} value={item.id}>
											{item.name}
										</option>
									))}
							</select>
							<small>Number available in stock</small>
							<input
								className={
									'form-control mb-2' + (addErrors.stock ? ' is-invalid' : '')
								}
								placeholder='Stock'
								value={newBook.stock}
								onChange={e => {
									if (
										e.target.value == '' ||
										isNaN(e.target.value) ||
										e.target.value < 0
									) {
										setAddErrors({ ...addErrors, stock: true });
									} else {
										setAddErrors({ ...addErrors, stock: false });
									}
									setNewBook({ ...newBook, stock: e.target.value });
								}}
							/>
							<small>Image</small>
							<div className='input-group mb-3'>
								<div className='custom-file'>
									<input
										type='file'
										className='custom-file-input'
										id='inputGroupFile01'
										aria-describedby='inputGroupFileAddon01'
										style={{ cursor: 'pointer' }}
										onChange={imageUploadAddBookHandler}
									/>
									<label
										className='custom-file-label'
										htmlFor='inputGroupFile01'
									>
										{fileName || 'Choose (optional)'}
									</label>
								</div>
							</div>
							<div className='d-flex justify-content-center'>
								{newBook && newBook.image ? (
									<img src={newBook.image} style={{ maxWidth: '75%' }} />
								) : null}
							</div>
						</div>
						<div className='modal-footer'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
						</div>
					</div>
				</div>
			</div>

			{/* --------------------------------- Edit Modal --------------------------------- */}
			<div
				className='modal fade'
				id='editBookModal'
				role='dialog'
				tabIndex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='editModalLabel'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-lg modal-dialog-scrollable'
					role='document'
				>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='editModalLabel'>
								Edit Book
							</h5>

							<div>
								{isProcessing ? (
									<span className='btn p-0' style={{ width: '90px' }}>
										<LoadingButton />
									</span>
								) : (
									<button
										type='button'
										className={
											'btn btn-primary' +
											(editErrors.title ||
											editErrors.author ||
											editErrors.description ||
											editErrors.publisher_id ||
											editErrors.year ||
											editErrors.image ||
											editErrors.category_id ||
											editErrors.stock
												? ' disabled'
												: '')
										}
										style={{ width: '90px' }}
										onClick={saveEditBookHandler}
									>
										Save
									</button>
								)}
								<button
									type='button'
									className='ml-2 btn btn-secondary'
									data-bs-dismiss='modal'
									onClick={e => {
										setMsg({ ...msg, text: '' });
										setSelectedBook(null);
									}}
								>
									Close
								</button>
							</div>
						</div>
						{selectedBook && (
							<div className='modal-body'>
								<small>Title</small>
								<input
									className={
										'form-control mb-2' +
										(editErrors.title ? ' is-invalid' : '')
									}
									placeholder='Title'
									value={selectedBook.title}
									onChange={e => {
										if (e.target.value == '') {
											setEditErrors({ ...editErrors, title: true });
										} else {
											setEditErrors({ ...editErrors, title: false });
										}
										setSelectedBook({ ...selectedBook, title: e.target.value });
									}}
								/>
								<small>Author</small>
								<input
									className={
										'form-control mb-2' +
										(editErrors.author ? ' is-invalid' : '')
									}
									placeholder='Author'
									value={selectedBook.author}
									onChange={e => {
										if (e.target.value == '') {
											setEditErrors({ ...editErrors, author: true });
										} else {
											setEditErrors({ ...editErrors, author: false });
										}
										setSelectedBook({
											...selectedBook,
											author: e.target.value,
										});
									}}
								/>
								<small>Description</small>
								<textarea
									className={
										'form-control mb-2' +
										(editErrors.description ? ' is-invalid' : '')
									}
									placeholder='Description...'
									value={selectedBook.description}
									onChange={e => {
										if (e.target.value == '') {
											setEditErrors({ ...editErrors, description: true });
										} else {
											setEditErrors({ ...editErrors, description: false });
										}
										setSelectedBook({
											...selectedBook,
											description: e.target.value,
										});
									}}
								></textarea>

								<small>Publisher</small>
								<select
									className={
										'form-control mb-2' +
										(editErrors.publisher_id ? ' is-invalid' : '')
									}
									id='publisherSelector'
									onChange={e => {
										if (e.target.value == '') {
											setEditErrors({ ...editErrors, publisher_id: true });
										} else {
											setEditErrors({ ...editErrors, publisher_id: false });
										}
										setSelectedBook({
											...selectedBook,
											publisher_id: e.target.value,
										});
									}}
									value={selectedBook.publisher_id}
								>
									<option defaultValue value=''>
										Publisher...
									</option>
									{publishers &&
										publishers.map((item, index) => (
											<option key={index} value={item.id}>
												{item.name}
											</option>
										))}
								</select>

								<small>Year</small>
								<input
									className={
										'form-control mb-2' + (editErrors.year ? ' is-invalid' : '')
									}
									placeholder='Year'
									value={selectedBook.year}
									onChange={e => {
										if (e.target.value == '' || isNaN(e.target.value)) {
											setEditErrors({ ...editErrors, year: true });
										} else {
											setEditErrors({ ...editErrors, year: false });
										}
										setSelectedBook({ ...selectedBook, year: e.target.value });
									}}
								/>
								<small>Category</small>
								<select
									className={
										'form-control mb-2' +
										(editErrors.category_id ? ' is-invalid' : '')
									}
									id='categorySelector'
									onChange={e => {
										if (e.target.value == '') {
											setEditErrors({ ...editErrors, category_id: true });
										} else {
											setEditErrors({ ...editErrors, category_id: false });
										}
										setSelectedBook({
											...selectedBook,
											category_id: e.target.value,
										});
									}}
									value={selectedBook.category_id}
								>
									<option defaultValue value=''>
										Category...
									</option>
									{categories &&
										categories.map((item, index) => (
											<option key={index} value={item.id}>
												{item.name}
											</option>
										))}
								</select>

								<small>Number available in stock</small>
								<div className='d-flex'>
									<input
										className={
											'form-control mb-2 mr-2' +
											(editErrors.stock ? ' is-invalid' : '')
										}
										placeholder='Stock'
										value={selectedBook.stock}
										onChange={e => {
											if (
												e.target.value == '' ||
												isNaN(e.target.value) ||
												e.target.value < 0
											) {
												setEditErrors({ ...editErrors, stock: true });
											} else {
												setEditErrors({ ...editErrors, stock: false });
											}
											setSelectedBook({
												...selectedBook,
												stock: e.target.value,
											});
										}}
									/>
									<div
										className='btn-group me-2 mb-2'
										role='group'
										aria-label='First group'
									>
										<button
											type='button'
											className={
												'btn btn-outline-secondary' +
												(editErrors.stock ? ' disabled' : '')
											}
											onClick={() => {
												if (!editErrors.stock && selectedBook.stock != 0)
													setSelectedBook({
														...selectedBook,
														stock: +selectedBook.stock - 1,
													});
											}}
										>
											-
										</button>
										<button
											type='button'
											className={
												'btn btn-outline-secondary' +
												(editErrors.stock ? ' disabled' : '')
											}
											onClick={() => {
												if (!editErrors.stock)
													setSelectedBook({
														...selectedBook,
														stock: +selectedBook.stock + 1,
													});
											}}
										>
											+
										</button>
									</div>
								</div>
								<small>Image (changes will overide the current image)</small>
								<div className='input-group mb-3'>
									<div className='custom-file'>
										<input
											type='file'
											className='custom-file-input'
											id='inputGroupFile01'
											aria-describedby='inputGroupFileAddon01'
											style={{ cursor: 'pointer' }}
											onChange={imageUploadEditBookHandler}
										/>
										<label
											className='custom-file-label'
											htmlFor='inputGroupFile01'
										>
											{selectedBook.image || fileName || 'Choose (optional)'}
										</label>
									</div>
								</div>
								<div className='d-flex justify-content-center'>
									{selectedBook && selectedBook.image ? (
										<img src={selectedBook.image} style={{ maxWidth: '75%' }} />
									) : null}
								</div>
							</div>
						)}
						<div className='modal-footer'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
						</div>
					</div>
				</div>
			</div>

			{/* --------------------------------- Delete Modal --------------------------------- */}
			<div
				className='modal fade'
				id='deleteBookModal'
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
								Delete Book
							</h5>
						</div>
						<div className='modal-body'>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
							{!selectedBook || (msg && msg.text != '') ? (
								<></>
							) : (
								<>
									<p>
										Are you sure you want to delete{' '}
										<b> {selectedBook.title} </b> ?
									</p>
									<div className='d-flex justify-content-center'>
										{selectedBook && selectedBook.image ? (
											<img
												src={selectedBook.image}
												style={{ maxWidth: '75%' }}
											/>
										) : null}
									</div>
								</>
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={e => {
									setMsg({ ...msg, text: '' });
									setSelectedBook(null);
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
									onClick={saveDeleteBookHandler}
								>
									Delete now
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{books && searchValue === '' && (
				<small className='d-flex justify-content-center text-muted mt-3 mb-3'>
					{'Showing ' +
						(numShow < books.length ? numShow : books.length) +
						' of ' +
						books.length}
				</small>
			)}

			<div className='d-inline d-flex justify-content-center'>
				{books &&
					books.length >= numShow &&
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

				{books && books.length > numShow && searchValue === '' && (
					<button
						className='btn btn-link'
						onClick={() => {
							if (numShow + NUM_INCREMENTS > books.length)
								setNumShow(books.length);
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

export default Books;
