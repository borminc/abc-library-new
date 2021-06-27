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

	return (
		<div>
			<div className='row mt-4 mb-2'>
				<h4>Currently Borrowed Books: {bookUser ? bookUser.length : 0}</h4>
			</div>
			<div className='overflow-auto'>
				<table className='table'>
					<thead>
						<tr className='mb-4'>
							<th scope='col'>ID</th>
							<th scope='col'>Cover</th>
							<th scope='col'>Book info</th>
							<th scope='col'>Borrw Date</th>
							<th scope='col'>Return Date</th>
							<th scope='col'>Note</th>
						</tr>
					</thead>
					<tbody>
						{bookUser &&
							bookUser.map((bookUser, i) => (
								<tr key={i}>
									<th scope='row'>{bookUser.id}</th>
									<td>
										<img
											className='align-middle'
											style={{ maxHeight: '20vh' }}
											src={bookUser.image || '/img/book-null-img.png'}
											alt='...'
										/>
									</td>
									<td>
										<p>Title: {bookUser.title}</p>
										<p>Author: {bookUser.author}</p>
										<p>Year: {bookUser.year}</p>
									</td>
									<td>
										<p>{bookUser.borrow_date}</p>
									</td>
									<td>
										<p className={bookUser.expired ? 'text-danger' : ''}>
											{bookUser.return_date}
										</p>
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
