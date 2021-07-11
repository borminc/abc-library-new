import axios from './../functions/axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../functions/cookies';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Loading } from './../components/Loading';

const AllBooks = props => {
	const history = useHistory();
	const [books, setBooks] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [postsPerPage, setPostsPerPage] = useState(24);
	const postsPerPageOptions = [8, 16, 24, 32, 40, 48];
	const [offset, setOffset] = useState(1);
	const [allBooks, setAllBooks] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const [sortType, setSortType] = useState('title');

	useEffect(() => {
		sortArray(sortType);
		setOffset(1);
	}, [sortType, isLoading]);

	const sortArray = type => {
		const types = {
			title: 'title',
			author: 'author',
			year: 'year',
		};
		const sortProperty = types[type];
		const sorted = [...allBooks].sort((a, b) => {
			if (a[sortProperty] < b[sortProperty]) {
				return -1;
			}
			if (a[sortProperty] > b[sortProperty]) {
				return 1;
			}
			return 0;
		});
		setAllBooks(sorted);
	};

	useEffect(() => {
		getAllBooks();
	}, []);

	useEffect(() => {
		pageChangeHandler();
	}, [offset, allBooks]);

	useEffect(() => {
		pageChangeHandler();
		setOffset(1);
	}, [postsPerPage]);

	const getAllBooks = () => {
		setLoading(true);
		axios
			.get('/api/books')
			.then(res => {
				setAllBooks(res.data);
			})
			.catch(err => {
				console.log(err.response);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handlePageClick = event => {
		const selectedPage = event.selected;
		setOffset(selectedPage + 1);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const pageChangeHandler = () => {
		const upperLimit = offset * postsPerPage;
		const slice = allBooks.slice(upperLimit - postsPerPage, upperLimit);
		const bookData = getPostData(slice);
		setBooks(bookData);
		setPageCount(Math.ceil(allBooks.length / postsPerPage));
	};

	const getPostData = books => {
		if (books && books.length <= 0) {
			return (
				<div className='container mt-4'>
					<h1>All Books</h1>
				</div>
			);
		}
		return (
			<div className='container mt-4'>
				<div className='d-flex justify-content-between mt-2 mb-5'>
					<h1 className='pr-4'>All Books</h1>
					<div className='row w-50'>
						<div className='col-sm-12 col-md-6'>
							<small className='mb-0'>Sort by</small>
							<select
								onChange={e => setSortType(e.target.value)}
								className='form-select'
							>
								<option value='title'>Title</option>
								<option value='author'>Author</option>
								<option value='year'>Year</option>
							</select>
						</div>
						<div className='col-sm-12 col-md-6'>
							<small className='mb-0'>Show per page</small>
							<select
								onChange={e => setPostsPerPage(e.target.value)}
								className='form-select'
								value={postsPerPage}
							>
								{postsPerPageOptions.map(value => (
									<option key={value} value={value}>
										{value}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className='row'>
					{books.map((value, i) => {
						// if (i + 1 > numShow) return null;
						// else {
						return (
							<div className='col-6 col-sm-4 col-md-3 p-3' key={i}>
								<div className='card p-2 h-100'>
									<img
										src={value.image || '/img/book-null-img.png'}
										className='img-fluid rounded'
										alt='...'
										style={{ cursor: 'pointer' }}
										data-bs-toggle='modal'
										data-bs-target={'#modal-book' + value.id}
									/>
									<div className='card-body'>
										<ul className='small list-unstyled'>
											<li>{value.title}</li>
											<li className='fst-italic text-primary'>
												{value.author}
											</li>
											<li className='fw-lighter'>{value.year}</li>
											{value.stock == 0 ? (
												<li className='text-danger'>Out of Stock</li>
											) : (
												''
											)}
										</ul>
									</div>
									<div className='card-footer'>
										{value.stock == 0 ? (
											<button
												disabled
												className='btn btn-outline-primary btn-sm'
												onClick={e => history.push('/borrow/' + value.id)}
												data-bs-dismiss='modal'
												aria-label='Close'
											>
												Borrow
											</button>
										) : (
											<>
												<button
													className='btn btn-outline-primary btn-sm'
													onClick={e => history.push('/borrow/' + value.id)}
													data-bs-dismiss='modal'
													aria-label='Close'
												>
													Borrow
												</button>
											</>
										)}
									</div>
								</div>
								{Modal(value, i)}
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	const Modal = (value, i) => {
		return (
			<div
				className='modal fade'
				id={'modal-book' + value.id}
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
				key={i}
			>
				<div className='modal-dialog modal-dialog-centered modal-xl'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								ABC Library
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='container'>
								<div className='row'>
									<div className='col-lg-3'>
										<img
											src={value.image || 'img/book-null-img.png'}
											className='img-fluid rounded'
											alt='...'
										/>
									</div>
									<div className='col-lg-4'>
										<table className='table small'>
											<thead>
												<tr>
													<th>
														<h4>{value.title}</h4>
													</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className='fw-bold'>Author</td>
													<td>{value.author}</td>
												</tr>
												<tr>
													<td className='fw-bold'>Publisher</td>
													<td>{value.publisher.name}</td>
												</tr>
												<tr>
													<td className='fw-bold'>Year</td>
													<td>{value.year}</td>
												</tr>
												<tr>
													<td className='fw-bold'>Category</td>
													<td>{value.category.name}</td>
												</tr>
												<tr>
													<td className='fw-bold'>Stock</td>
													<td>
														{value.stock == 0 ? (
															<div className='text-danger'>Out of Stock</div>
														) : (
															value.stock
														)}
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className='col-lg-5'>
										<h4>Description</h4>
										<small style={{ whiteSpace: 'pre-wrap' }}>
											{value.description}
										</small>
										<br />
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer'>
							{value.stock == 0 ? (
								<div>
									<small className='text-danger me-2'>
										* You can't borrow this book
									</small>
									<button
										disabled
										className='btn btn-outline-primary btn-sm'
										onClick={e => history.push('/borrow/' + value.id)}
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										Borrow
									</button>
								</div>
							) : (
								<button
									className='btn btn-outline-primary btn-sm'
									onClick={e => history.push('/borrow/' + value.id)}
									data-bs-dismiss='modal'
									aria-label='Close'
								>
									Borrow
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	};

	if (isLoading) {
		return (
			<div>
				<Loading text='This might take a while...' />
			</div>
		);
	}

	return (
		<>
			{books}
			{allBooks && allBooks.length > 0 && (
				<div
					className='container d-flex justify-content-center p-3'
					key={sortType + postsPerPage}
				>
					<ReactPaginate
						previousLabel={'Previous'}
						nextLabel={'Next'}
						breakLabel={'...'}
						breakClassName={'break-me'}
						pageCount={pageCount}
						onPageChange={handlePageClick}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
					/>
				</div>
			)}
		</>
	);
};

export default AllBooks;
