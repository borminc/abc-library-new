import axios from '../../../functions/axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { Loading, LoadingButton } from '../../../components/Loading';

const CurrentlyBorrowedBooks = () => {
	const [isLoading, setLoading] = useState(false);
	const [bookUser, setBookUser] = useState();

	useEffect(() => {
		setLoading(true);
		axios
			.get(`/api/user/books`)
			.then(res => {
				setBookUser(res.data);
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
				}
				console.log(error);
				console.log(error.message);
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
											src={value.image || '/img/book-null-img.png'}
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
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className='row mt-4 mb-2'>
				<h4>Currently Borrowed Books: {bookUser ? bookUser.length : 0}</h4>
			</div>
			<div className='overflow-auto'>
				<table className='table'>
					<thead>
						<tr className='mb-4'>
							<th className='text-center' scope='col'>
								Book
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Title</th>
							<th scope='col'>Borrw Date</th>
							<th scope='col'>Return Date</th>
							<th scope='col'>Note</th>
						</tr>
					</thead>
					<tbody>
						{bookUser &&
							bookUser.map((bookUser, i) => (
								<tr key={i}>
									<td className='d-flex justify-content-center'>
										<img
											className='align-middle'
											style={{ maxHeight: '20vh', cursor: 'pointer' }}
											src={bookUser.image || '/img/book-null-img.png'}
											alt='...'
											data-bs-toggle='modal'
											data-bs-target={'#modal-book' + bookUser.id}
										/>
									</td>
									<th scope='row'>{bookUser.id}</th>
									<td>{bookUser.title}</td>
									<td>{bookUser.borrow_date}</td>
									<td className={bookUser.expired ? 'text-danger' : ''}>
										{bookUser.return_date}
									</td>
									<td>
										{bookUser.expired && (
											<div>
												<p className='text-danger'>
													Return late: {bookUser.days_past_expired || '0'} days
												</p>
												<p className=' text-danger '>
													Fine: ${bookUser.cost || '0'}
												</p>
											</div>
										)}
										{Modal(bookUser, i)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			{isLoading && <Loading height='1vh' size='2rem' />}
		</div>
	);
};

export default CurrentlyBorrowedBooks;
