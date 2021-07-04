import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from './../functions/axios';
import MessageAlert from '../components/MessageAlert';
import { Loading, LoadingButton } from '../components/Loading';

const Borrow = props => {
	const history = useHistory();
	let { bookId } = useParams();
	const [book, setBook] = useState();
	const [isProcessing, setProcessing] = useState();
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [disable, setDisable] = useState(false);

	useEffect(() => {
		getBookFromServer();
	}, [bookId]);

	const getBookFromServer = () => {
		axios.get('/api/books/' + bookId).then(res => {
			setBook(res.data);
		});
	};

	function handleSubmit(event) {
		setProcessing(true);
		event.preventDefault();
		axios
			.post('/api/borrow', { book_id: bookId })
			.then(res => {
				getBookFromServer();
				document.getElementById('closeModalBtn').click();
				history.push('/user/borrowed-books');
			})
			.catch(err => {
				console.log(err.response.data.error);
				setMsg({
					text: err.response.data.error,
					success: 0,
				});
				setDisable(true);
			})
			.finally(() => {
				setProcessing(false);
			});
	}

	const Modal = book => {
		return (
			<div
				className='modal fade'
				id={'myModal' + book.id}
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-body'>
							<p>
								Are you sure want to borrow{' '}
								<span className='text-success'> {book.title} </span>?
							</p>
							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary btn-sm'
								data-bs-dismiss='modal'
								id='closeModalBtn'
							>
								Close
							</button>
							{isProcessing ? (
								<LoadingButton />
							) : (
								<button
									onClick={handleSubmit}
									className='btn btn-primary btn-sm'
									disabled={disable}
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

	return (
		<>

			{book && (
				<div className='container pt-5 mt-5'>
					<div className='row'>
						<div className='col-12'>
							<div className='row'>
								<div className='col-lg-3 col-sm-12 col-md-12'>
									<img
										src={book.image || '/img/book-null-img.png'}
										className='card-img-top'
										alt='...'
									/>
								</div>
								<div className='col-8'>
									<table className='table small'>
										<thead>
											<tr>
												<th>
													<h3>{book.title}</h3>
												</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='fw-bold'>Author</td>
												<td>{book.author}</td>
											</tr>
											<tr>
												<td className='fw-bold'>Year</td>
												<td>{book.year}</td>
											</tr>
											<tr>
												<td className='fw-bold'>Publisher</td>
												<td>{book.publisher.name}</td>
											</tr>
											<tr>
												<td className='fw-bold'>Category</td>
												<td>{book.category.name}</td>
											</tr>
											<tr>
												<td className='fw-bold'>Stock</td>
												{book.stock == 0 ? (
													<td className='text-danger'>Out of Stock</td>
												) : (
													<td>{book.stock}</td>
												)}
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className='container pt-2'>
							<h3>Description</h3>
							<p>{book.description}</p>
						</div>
					</div>

					<div className='container mt-3'>
						<div className='card-group shadow-lg p-3 mb-5 bg-body rounded'>
							<div className='card'>
								<div className='card-header'>
									<h5>Rule and Policy</h5>
								</div>
								<div className='card-body'>
									<ul>
										<li>Give the book back in a timely manner.</li>
										<li>Do not fold down the corners</li>
										<li>Don't lend it to others</li>
										<li>Don't write in, underline, or highlight ANYTHING.</li>
										<li>Don't take the book in the bath or to the pool.</li>
										<li>Don't lose the dust jacket.</li>
										<li>If you lose or maim it, buy a replacement</li>
									</ul>
								</div>
							</div>
							<div className='card'>
								<div className='card-header'>
									<h5>Overdue Materials</h5>
								</div>
								<div className='card-body'>
									<ul>
										<li>
											When any borrowed item becomes overdue, borrowing
											privileges are automatically suspended
										</li>
										<li>
											For items more than the due date, a bill for its
											replacement will be issued:
											<ul>
												<li>$1.00 for 1 day</li>
											</ul>
										</li>
										<li>
											Borrowing privileges will be restored after return of all
											late materials and/or payment of all fees
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className='p-5'>
						<p>Click button below to confirm your borrow</p>
						{(book.stock == 0) ? (
							<>
								<button
								disabled
								type='submit'
								className='btn btn-primary'
								data-bs-toggle='modal'
								data-bs-target={'#myModal' + book.id}
								>
									Borrow
								</button>
								<small className='text-danger me-2'>
										* You can't borrow this books
								</small>
							</>
						) :
						(
							<>
								<button
								type='submit'
								className='btn btn-primary'
								data-bs-toggle='modal'
								data-bs-target={'#myModal' + book.id}
								>
									Borrow
								</button>
							</>
						)}
						{Modal(book)}
					</div>
				</div>
			)}
		</>
	);
};
export default Borrow;
