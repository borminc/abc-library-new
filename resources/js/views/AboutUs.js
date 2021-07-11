import React from 'react';
import { FaLaptop, FaClock, FaUserShield, FaBookOpen } from 'react-icons/fa';
const AboutUs = () => {
	return (
		<div>
			<header
				className='masthead m-0'
				style={{ backgroundImage: `url("/img/bookshelf.jpg")` }}
			>
				<div className='container position-relative px-4 px-lg-5'>
					<div className='row gx-4 gx-lg-5 justify-content-center'>
						<div className='col-md-10 col-lg-8 col-xl-7'>
							<div className='page-heading'>
								<h1 className='display-1 fw-bold'>About Us</h1>
								<span className='subheading'>This is what we do.</span>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section className='container-fluid mt-5 mb-5 pb-5'>
				<div className='container px-4 px-lg-5'>
					<div className='row gx-4 gx-lg-5'>
						<div className='col-lg-3 col-md-6 text-center'>
							<div className='mt-5'>
								<div className='mb-2'>
									<FaBookOpen className='text-primary display-5 pb-2' />
								</div>
								<h3 className='h4 mb-2 fw-bold'>Easily Find Books</h3>
								<p className='text-muted mb-0'>
									An entire physical library is now available online. Search a
									physical library like you never did before.
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 text-center'>
							<div className='mt-5'>
								<div className='mb-2'>
									<FaClock className='text-primary display-5 pb-2' />
								</div>
								<h3 className='h4 mb-2 fw-bold'>Fast Borrow Process</h3>
								<p className='text-muted mb-0'>
									All you need to do is register, and then you can start
									borrowing books immediately.
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 text-center'>
							<div className='mt-5'>
								<div className='mb-2'>
									<FaUserShield className='text-primary display-5 pb-2' />
								</div>
								<h3 className='h4 mb-2 fw-bold'>Security</h3>
								<p className='text-muted mb-0'>
									Your data belong to you; they are safe and never shared with
									anyone.
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 text-center'>
							<div className='mt-5'>
								<div className='mb-2'>
									<FaLaptop className='text-primary display-5 pb-2' />
								</div>
								<h3 className='h4 mb-2 fw-bold'>Up to date</h3>
								<p className='text-muted mb-0'>
									We want to make your love for reading more enjoyable. That's
									why we're constantly keeping our resources and technology
									updated.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className='mb-4 p-3'>
				<div className='container px-4 px-lg-5'>
					<div className='row gx-4 gx-lg-5 justify-content-center'>
						<div className='col-md-12 col-lg-4 col-xl-5'>
							<img
								src={'/img/abc-library.jpg'}
								alt='abc-library'
								style={{ width: `100%`, height: `100%` }}
							/>
						</div>
						<div className='col-md-10 col-lg-8 col-xl-7'>
							<h5 className='fw-bold'>What we are</h5>
							<p>
								Short and simple: we give you the option to browse physical
								books online. No, not digital books (e-books), but paperbacks
								and hardcovers. Browse through our wide variety of books;if you
								find something that catches your attention (or heart), borrow it
								online, and go pick up at the library.
							</p>
							<p>Our library system:</p>
							<ul>
								<li>Makes finding books easier,</li>
								<li>Saves time for users who are looking for books,</li>
								<li>Encourages users to read more books.</li>
							</ul>
						</div>
					</div>
				</div>
			</main>

			<main className='mb-4 p-3'>
				<div className='container px-4 px-lg-5'>
					<div className='row gx-4 gx-lg-5 justify-content-center'>
						<div className='col-md-12 col-lg-4 col-xl-5'>
							<img
								src={'/img/policy.jpg'}
								alt='policy'
								style={{ width: `100%`, height: `100%` }}
							/>
						</div>
						<div className='col-md-10 col-lg-8 col-xl-7'>
							<h5 className='fw-bold'>Rules &#38; Policies</h5>
							<ul>
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
								<li>
									When any borrowed item becomes overdue, appropriate fees must
									be paid, and user cannot borrow additional books.
								</li>
								<li>
									For items returned past the due date, a bill for its
									replacement will be issued.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
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
export default AboutUs;
