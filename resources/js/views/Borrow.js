import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from './../functions/axios';
import MessageAlert from '../components/MessageAlert';
import { Loading, LoadingButton } from '../components/Loading';

const Borrow = props => {
	const history = useHistory();
	let { bookId } = useParams();
	const [book, setBook] = useState();
	const [isProcessing, setProcessing] = useState(false);
	const [rules, setRules] = useState();
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [disable, setDisable] = useState(false);

	useEffect(() => {
		getBookFromServer();
	}, [bookId]);

	useEffect(() => {
		axios
			.get('/api/library-default-rule')
			.then(res => {
				setRules(res.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}, []);

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
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								Confirmation
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>{' '}
						<div className='modal-body'>
							{msg && msg.text == '' && (
								<p>
									Are you sure you want to borrow{' '}
									<span className='text-primary'>
										{' '}
										<b>{book.title}</b>
									</span>
									?
								</p>
							)}

							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								id='closeModalBtn'
							>
								Cancel
							</button>
							<div>
								{isProcessing ? (
									<LoadingButton />
								) : (
									<button
										onClick={handleSubmit}
										className='btn btn-primary'
										disabled={disable}
									>
										Borrow
									</button>
								)}
							</div>
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
									<h5>Rules and Policies</h5>
								</div>
								<div className='card-body'>
									<ul>
										<li>
											{'Each user can borrow ' +
												(rules
													? rules.num_of_books_per_user
													: 'a limited number of ') +
												' books at once.'}
										</li>
										<li>Give the book back in a timely manner.</li>
										<li>Do not fold down the corners</li>
										<li>Don't write in, underline, or highlight ANYTHING.</li>
										<li>
											If you lose or maim it, appropriate fines/actions will be
											taken.
										</li>
										<li>
											All rules and policies are subject to change without prior
											notice to borrowers.
										</li>
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
											{'Borrowers have ' +
												(rules
													? rules.duration_per_borrow + ' day(s) '
													: 'limited duration') +
												'to borrow each book.'}
										</li>
										<li>
											When any borrowed item becomes overdue, appropriate fees
											must be paid, and user cannot borrow additional books.
										</li>
										<li>
											For items returned past the due date, a bill for its
											replacement will be issued.
											{rules && rules.cost_per_day_late_return && (
												<ul>
													<li className='text-danger'>
														${rules.cost_per_day_late_return} for 1 day overdue
													</li>
												</ul>
											)}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className='p-5'>
						<p>
							By clicking Borrow, you agree to all the rules and policies of ABC
							Library.
						</p>
						<p>
							<b className='text-danger'>
								You will PICK UP the book at the library in a timely manner.
								OVERDUE FEES will still apply after the return date even if you
								never pick up the book.
							</b>
						</p>
						<button
							type='submit'
							className='btn btn-primary'
							data-bs-toggle='modal'
							data-bs-target={'#myModal' + book.id}
						>
							Borrow
						</button>
						{Modal(book)}
					</div>
				</div>
			)}
		</>
	);
};
export default Borrow;
