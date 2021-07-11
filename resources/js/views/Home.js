import axios from './../functions/axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../functions/cookies';
import { Link } from 'react-router-dom';
import { Loading } from './../components/Loading';

const Home = props => {
	const history = useHistory();
	const [by, setBy] = useState('all');
	const [value, setValue] = useState('');
	const [search, setSearch] = useState();
	const [latestBooks, setLatestBook] = useState([]);
	const [popularBooks, setPopularBook] = useState([]);
	const [isProcessing, setProcessing] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.all([
				axios.get('/api/books/latest?number=12'),
				axios.get('/api/books/popular?number=12'),
			])
			.then(
				axios.spread((res1, res2) => {
					setLatestBook(res1.data);
					setPopularBook(res2.data);
				})
			)
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const options = [
		{ name: 'All', value: 'all' },
		{ name: 'Title', value: 'title' },
		{ name: 'Author', value: 'author' },
		{ name: 'Description', value: 'description' },
		{ name: 'Year', value: 'year' },
	];

	function handleChange(event) {
		const value = event.target.value;
		setValue(value);
	}

	function selectedValueHandler(event) {
		const by = event.target.value;
		setBy(by);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (value === '') {
			setSearch(null);
			return;
		}
		setProcessing(true);
		axios
			.get('/api/books/search?by=' + by + '&value=' + value)
			.then(res => {
				setSearch(res.data);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setProcessing(false);
			});
	}

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

	const renderSearchResult = () => {
		if (search && search.length == 0) {
			return (
				<div className='text-center p-5' style={{ marginBottom: '20vh' }}>
					<img
						src={'/img/not-found.jpg'}
						style={{ width: '25rem', maxWidth: '100%' }}
						alt='not-found'
					/>
					<div className='display-6'>No Result Found</div>
				</div>
			);
		}
		return (
			<div className='container p-5'>
				<div className='row'>
					{search.map((value, i) => (
						<div className='col-6 col-sm-6 col-md-4 col-lg-3 p-2' key={i}>
							<div className='card p-2 h-100'>
								<img
									src={value.image || 'img/book-null-img.png'}
									className='img-fluid rounded'
									alt='...'
									data-bs-toggle='modal'
									data-bs-target={'#modal-book' + value.id}
								/>
								<div className='card-body'>
									<ul className='small list-unstyled'>
										<li>{value.title}</li>
										<li className='fst-italic text-primary'>{value.author}</li>
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
					))}
				</div>
			</div>
		);
	};

	const renderBooks = () => {
		if (isLoading)
			return (
				<div style={{ height: '25%' }}>
					<Loading height='25vh' />
				</div>
			);
		return (
			<div>
				<div className='container-fluid mt-5 pb-5'>
					<div className='container'>
						<h6 className='display-6 fw-bold text-center'>
							<span className='text-primary'>Latest Books</span>
						</h6>
						<div className='row justify-content-center mb-3 text-center'>
							<p className='text-wrap col-lg-6 text-secondary'>
								Explore the newest and most recently added books at ABC Library!
							</p>
						</div>

						<div className='row'>
							{latestBooks.map((value, i) => (
								<div className='col-6 col-sm-6 col-md-4 col-lg-3 p-3' key={i}>
									<img
										src={value.image || 'img/book-null-img.png'}
										className='img-fluid rounded'
										alt='...'
										data-bs-toggle='modal'
										data-bs-target={'#modal-book' + value.id}
										style={{ cursor: 'pointer' }}
									/>
									{Modal(value, i)}
								</div>
							))}
						</div>
						<div className='d-flex justify-content-center mt-4'>
							<Link to='latest-books'>See more</Link>
						</div>
					</div>
				</div>

				<div className='container-fluid mt-5 pb-5'>
					<div className='container'>
						<h6 className='display-6 fw-bold text-center'>
							<span className='text-primary'>Popular Books</span>
						</h6>
						<div className='row justify-content-center mb-3 text-center'>
							<p className='text-wrap col-lg-6 text-secondary'>
								All time favorites of all readers at ABC Library!
							</p>
						</div>

						<div className='row'>
							{popularBooks.map((value, i) => (
								<div className='col-6 col-sm-6 col-md-4 col-lg-3 p-3' key={i}>
									<img
										src={value.image || 'img/book-null-img.png'}
										className='img-fluid rounded'
										alt='...'
										data-bs-toggle='modal'
										data-bs-target={'#modal-book' + value.id}
										style={{ cursor: 'pointer' }}
									/>
									{Modal(value, i)}
								</div>
							))}
						</div>
						<div className='d-flex justify-content-center mt-4'>
							<Link to='popular-books'>See more</Link>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<header
				className='masthead m-0'
				style={{ backgroundImage: `url("/img/bg-books.jpg")` }}
			>
				<div className='container position-relative'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='text-center text-white'>
								<h1
									className='display-1 fw-bold'
									style={{ cursor: 'pointer' }}
									onClick={e => {
										setValue('');
										setSearch(null); // reset search
									}}
								>
									ABC Library
								</h1>
								<p className='mb-5' id='search-area'>
									An entire physical library. Now at your fingertips.
								</p>
								<form className='d-flex' onSubmit={handleSubmit}>
									<div className='input-group-lg'>
										<select
											className='form-select'
											onChange={selectedValueHandler}
										>
											{options.map(item => (
												<option key={item.value} value={item.value}>
													{item.name}
												</option>
											))}
										</select>
									</div>
									<div style={{ width: '10px' }}></div>
									<div className='input-group input-group-lg'>
										<input
											onChange={handleChange}
											className={
												'form-control AutoFocus' +
												(by && by === 'year' && isNaN(value)
													? ' is-invalid'
													: '')
											}
											type='text'
											placeholder='Search...'
											value={value}
										/>
										<button
											type='submit'
											className='btn btn-primary search-btn h-100'
											disabled={by && by === 'year' && isNaN(value)}
											onClick={() => {
												document
													.getElementById('search-area')
													.scrollIntoView(true);
												document.getElementById('search-area').scrollIntoView({
													behavior: 'smooth',
													block: 'start',
													inline: 'center',
												});
											}}
										>
											{/* Search */}
											<img
												src='/img/search-icon.svg'
												style={{ width: '25px' }}
											/>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div>
				{isProcessing ? (
					<div style={{ height: '25%' }}>
						<Loading height='25vh' />
					</div>
				) : search ? (
					renderSearchResult()
				) : (
					renderBooks()
				)}
			</div>

			{/* Footer */}
			<footer className='sticky-footer bg-none'>
				<div className='container mb-3'>
					<div className='copyright text-center my-auto'>
						<span>Copyright &copy; ABC Library 2021</span>
					</div>
				</div>
				<small className='text-center'>
					<div>No. 5Eo, St. 2009, 12406, Phnom Penh, Cambodia</div>
					<div>Contact us: 011 222 333</div>
				</small>
			</footer>
		</div>
	);
};

export default Home;
