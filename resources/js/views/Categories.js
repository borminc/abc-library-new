import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from './../functions/axios';
import ReactPaginate from 'react-paginate';
import { Loading } from '../components/Loading';

const Categories = () => {
	let { categoryId } = useParams();
	const history = useHistory();
	const [category, setCategory] = useState('');

	const [postsPerPage] = useState(24);
	const [offset, setOffset] = useState();
	const [allPosts, setAllPosts] = useState([]);
	const [posts, setPosts] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get('/api/categories/' + categoryId)
			.then(res => {
				setCategory(res.data);
			})
			.finally(() => {
				setLoading(false);
			});
		getAllPosts();
	}, [categoryId]);

	useEffect(() => {
		pageChangeHandler();
	}, [categoryId, offset, allPosts]);

	const getAllPosts = () => {
		axios
			.get('/api/books/search?by=category_id&value=' + categoryId)
			.then(res => {
				setAllPosts(res.data);
				setOffset(1);
			});
	};

	const handlePageClick = event => {
		const selectedPage = event.selected;
		setOffset(selectedPage + 1);
	};

	const pageChangeHandler = () => {
		const upperLimit = offset * postsPerPage;
		const slice = allPosts.slice(upperLimit - postsPerPage, upperLimit);
		const postData = getPostData(slice);
		setPosts(postData);
		setPageCount(Math.ceil(allPosts.length / postsPerPage));
	};

	const getPostData = data => {
		if (data && data.length <= 0) {
			return (
				<div className='container mt-4'>
					{category && (
						<>
							<h1>{category.name}</h1>
							<p>No books in this category at the moment!</p>
						</>
					)}
				</div>
			);
		}
		return (
			<div className='container mt-4'>
				<h1>{category && category.name}</h1>
				<div className='row'>
					{data.map((value, i) => (
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
										* You can't borrow this books
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
			{posts}

			{allPosts && allPosts.length > 0 && (
				<div
					className='container d-flex justify-content-center p-3'
					key={categoryId}
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

export default Categories;
