import React from 'react';

const Loading = props => {
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

export default Loading;
