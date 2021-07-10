import axios from './../../../functions/axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import ReactDOM from 'react-dom';
import { useHistory, Link } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from './../../../functions/cookies';
import MessageAlert from './../../../components/MessageAlert';
import { Loading, LoadingButton } from './../../../components/Loading';

const ChangePassword = props => {
    const history = useHistory();
    const [user, setUser] = [props.user, props.setUser];
    const [old_name, setOldName] = useState('');
    const [new_name, setNewName] = useState('');
    const [isProcessing, setProcessing] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
    const [errors, setErrors] = useState({
		new_name: false,
		old_name: false
	});
    const hasInputErrors = () => {
		return (
            errors.old_name ||
            errors.new_name ||
            new_name == '' ||
            old_name == ''
		);
	};

    const changeNameHandler = () => {
		setProcessing(true);
		setMsg({ text: '', success: 0 });
		if (hasInputErrors()) {
			setProcessing(false);
			return;
		}
		const changeNameInfo = {
			old_name: old_name,
            new_name: new_name,
		};
		axios
			.post('/api/user/change-name', changeNameInfo)
			.then(res => {
				setCookie('token', res.data.access_token);
				setUser(res.data.user);
				setMsg({
					text: res.data.message,
					success: 1,
				});
			})
			.catch(err => {
				setMsg({
					text: err.response.data.error,
					success: 0,
				});
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	return (
        <div style={{ padding: '5% 5%' }}>
			<div className='row justify-content-center'>
				<div className='col-md-12 col-lg-10'>
					<div className='wrap d-md-flex'>
						<div className='p-4 p-md-5 w-100'>
							<div className='d-flex'>
								<div className='w-100'>
									<h2 className='mb-4'>Change Name</h2>
								</div>
							</div>

							{msg && msg.text && (
								<MessageAlert msg={msg.text} success={msg.success} />
							)}

							<form>
								<div className='form-group mb-3'>
									<input
										id='old-name'
										type='text'
										className={
											'form-control' + (errors.old_name ? ' is-invalid' : '')
										}
										placeholder='Old Name'
										onChange={e => {
											setOldName(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value === '' )
												setErrors({ ...errors, old_name: true });
											else setErrors({ ...errors, old_name: false });
										}}
										required
									/>
									{errors.old_name && (
										<small className='form-text text-danger'>
											Name cannot be empty.
										</small>
									)}
								</div>
								<div className='form-group mb-3'>
									<input
										id='new-name'
										type='text'
										className={
											'form-control' +
											(errors.new_name ? ' is-invalid' : '')
										}
										placeholder='New Name'
										onChange={e => {
											setNewName(e.target.value);
											setMsg({ text: '', success: 0 });
											if (e.target.value === '') {
												setErrors({ ...errors, new_name: true });}
											else setErrors({ ...errors, new_name: false });
										}}
										required
									/>
									{errors.new_name && (
										<small className='form-text text-danger'>
											This field is required
										</small>
									)}
								</div>
								<div className='form-group'>
									{isProcessing ? (
										<LoadingButton />
									) : (
										<button
											type='button'
											className={
												'form-control btn btn-primary rounded submit px-3' +
												(hasInputErrors() ? ' disabled' : '')
											}
											onClick={changeNameHandler}
										>
											Change Name
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}
export default ChangePassword;
