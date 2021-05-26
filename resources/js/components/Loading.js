import React from 'react';

export const Loading = props => {
	return (
		<div
			className='d-flex justify-content-center align-items-center m-5'
			style={{ height: '100vh' }}
		>
			<div
				className='spinner-border'
				role='status'
				style={{ width: '4rem', height: '4rem' }}
			>
				<span className='sr-only'></span>
			</div>
		</div>
	);
};

export const LoadingButton = () => {
	return (
		<button
			className='form-control btn btn-primary rounded submit px-3'
			type='button'
			disabled
		>
			<span
				className='spinner-border spinner-border-sm'
				role='status'
				aria-hidden='true'
			></span>
		</button>
	);
};
