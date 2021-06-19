import axios from './../functions/axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { setCookie, getCookie, deleteCookie } from '../functions/cookies';
import { Link } from 'react-router-dom';
import { Loading } from './../components/Loading';

const Home = props => {
	const history = useHistory();
	const [by, setBy] = useState('title');
	const [value, setValue] = useState('');
	const [search, setSearch] = useState();
	const [books, setBook] = useState([]);
	const [isProcessing, setProcessing] = useState(false);

	useEffect(() => {
		axios.get('/api/books').then(res => {
			setBook(res.data);
			// console.log(res.data);
		});
	}, []);

	const options = [
		{ name: 'Title', value: 'title' },
		{ name: 'Author', value: 'author' },
		{ name: 'Description', value: 'description' },
		{ name: 'Publisher', value: 'publisher' },
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
		setProcessing(true);
		axios
			.get('/api/books/search?by=' + by + '&value=' + value)
			.then(res => {
				console.log(res.data);
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
													<th className='display-6'>{value.title}</th>
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
													<td>{value.publisher}</td>
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
													<td>{value.stock}</td>
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
							<button
								className='btn btn-outline-primary btn-sm'
								onClick={e => history.push('/borrow/' + value.id)}
								data-bs-dismiss='modal'
								aria-label='Close'
							>
								Borrow
							</button>
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
						src={'img/not-found.jpg'}
						style={{ width: '25rem' }}
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
						<div className='col-4 p-2' key={i}>
							<div className='card border border-1 p-2'>
								<img
									src={value.image || 'img/book-null-img.png'}
									className='img-fluid rounded'
									alt='...'
								/>
								<ul className='small list-unstyled'>
									<li>{value.title}</li>
									<li className='fst-italic text-primary'>{value.author}</li>
									<li className='fw-lighter'>{value.year}</li>
								</ul>
								<div className='text-end'>
									<button
										type='button'
										className='btn btn-outline-info btn-sm me-2'
										data-bs-toggle='modal'
										data-bs-target={'#modal-book' + value.id}
									>
										More
									</button>
									<button
										className='btn btn-outline-primary btn-sm'
										onClick={e => history.push('/borrow/' + value.id)}
									>
										Borrow
									</button>
								</div>
								{Modal(value, i)}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	const renderNewBooks = () => {
		return (
			<div>
				<div className='jumbotron jumbotron-fluid pb-5'>
					<div className='container'>
						<h6 className='display-6 fw-bold text-center'>
							New <span className='text-primary'>Books</span>
						</h6>
						<div className='row justify-content-center mb-3 text-center'>
							<p className='text-wrap col-lg-6 text-secondary'>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered lebmid alteration in some ledmid
								form
							</p>
						</div>

						<div className='row row-cols-5'>
							{books.map((value, i) => (
								<div className='col-3 p-3 ' key={i}>
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
								<p className='mb-5'>
									Part of ABC Library project. More than 1,000 + article books
									to borrow.
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
											className='form-control AutoFocus'
											type='text'
											placeholder='Search...'
											value={value}
										/>
										<button
											type='submit'
											className='btn btn-primary search-btn h-100'
										>
											Search
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</header>

			{isProcessing ? (
				<div style={{ height: '25%' }}>
					<Loading height='25vh' />
				</div>
			) : search ? (
				renderSearchResult()
			) : (
				renderNewBooks()
			)}
		</div>
	);
};

export default Home;
