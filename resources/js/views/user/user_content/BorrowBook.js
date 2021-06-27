import axios from "../../../functions/axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

const Homess = () => {
	const [bookUser, setBookUser] = useState();

	useEffect(() => {
		axios
			.get(`/api/user/books`)
			.then(res => {
				console.log(res.data);
				setBookUser(res.data);
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
				}
				console.log(error);
				console.log(error.message);
			});
	}, []);

	//

	return (
		<div>
			<table className='table table-hover min-vw-60 mt-5 overflow-auto table-responsive'>
				<thead className='table-primary mb-lg-5'>
					<tr className='mb-4'>
						<th scope='col' className='text-primary'>
							#
						</th>
						<th scope='col' className=' col-1 text-primary'>
							Cover
						</th>
						<th scope='col' className='text-primary'>
							Book info
						</th>
						<th scope='col' className='text-primary'>
							Borrw Date
						</th>
						<th scope='col' className='text-primary'>
							Return Date
						</th>
						<th scope='col' className='text-primary'>
							Note
						</th>
					</tr>
				</thead>
				<tbody>
					{bookUser &&
						bookUser.map((bookUser, i) => (
							<tr key={i}>
								<th scope='row'>{bookUser.id}</th>
								<td>
									<img
										className='w-100 h-auto align-middle'
										src={
											bookUser.image || "https://i.stack.imgur.com/D2VB2.png"
										}
										alt='...'
									/>
								</td>
								<td>
									<p className='h6'>{bookUser.title}</p>
									<p className='d-inline me-5 fst-italic'>{bookUser.author}</p>
									<p className='d-inline '>{bookUser.year}</p>
								</td>
								<td>
									<p className=' fst-italic text-primary'>
										{bookUser.borrow_date}
									</p>
								</td>
								<td>
									<p
										className={
											"fst-italic " +
											(bookUser.expired ? "text-danger" : "text-primary")
										}
									>
										{bookUser.return_date}
									</p>
								</td>
								<td>
									<p className='text-danger fst-italic'>
										Return late: {bookUser.days_past_expired || "0"} days
									</p>
									<p className=' text-danger '>Find: ${bookUser.cost || "0"}</p>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Homess;
