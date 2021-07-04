import axios from './../functions/axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../functions/cookies';
import { Link } from 'react-router-dom';
import { Loading } from './../components/Loading';

const AllBooks = props => {
	const history = useHistory();
	const [books, setBooks] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const NUM_INCREMENTS = 24;
	const [numShow, setNumShow] = useState(NUM_INCREMENTS);

	useEffect(() => {
		setLoading(true);
		axios
			.get('/api/books')
			.then(res => {
				setBooks(res.data);
			})
			.catch(err => {
				console.log(err.response);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

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
										<small>{value.description}</small>
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
			<div className='container mt-4'>
				<h1>All Books</h1>
				<div className='row'>
					{books.map((value, i) => {
						if (i + 1 > numShow) return null;
						else {
							return (
								<div className='col-6 col-sm-4 col-md-3 p-3' key={i}>
									<div className='card border border-1 p-2'>
										<img
											src={value.image || '/img/book-null-img.png'}
											className='img-fluid rounded'
											alt='...'
											style={{ cursor: 'pointer' }}
											data-bs-toggle='modal'
											data-bs-target={'#modal-book' + value.id}
										/>
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
										<div className='text-end'>
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
									{Modal(value, i)}
								</div>
							);
						}
					})}
				</div>
				{books && (
					<small className='d-flex justify-content-center text-muted mt-3 mb-3'>
						{'Showing ' +
							(numShow < books.length ? numShow : books.length) +
							' of ' +
							books.length}
					</small>
				)}

				<div className='d-inline d-flex justify-content-center'>
					{books && books.length >= numShow && numShow > NUM_INCREMENTS && (
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

					{books && books.length > numShow && (
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
				<div className='mb-5'></div>
			</div>
		</>
	);
};

export default AllBooks;
