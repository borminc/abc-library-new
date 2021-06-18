import axios from '../../../functions/axios';
import { hasIn, set } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import MessageAlert from './../../../components/MessageAlert';
import { Loading, LoadingButton } from './../../../components/Loading';

const Rules = () => {
	const [isLoading, setLoading] = useState(false);
	const [isSaving, setSaving] = useState(false);
	const [msg, setMsg] = useState({ text: '', success: 0 });
	const [rules, setRules] = useState();
	const [hasChanged, setChanged] = useState(false);
	const [defaultRule, setDefaultRule] = useState();

	useEffect(() => {
		getRulesFromServer();
	}, []);

	const getRulesFromServer = () => {
		setLoading(true);
		axios
			.get('/api/library-rules')
			.then(res => {
				setRules(res.data);
				let rules = res.data;
				for (const i in rules) {
					if (rules[i].name == 'default') {
						setDefaultRule(rules[i]);
						break;
					}
				}
			})
			.catch(err => {
				setMsg({ text: 'There was a problem: ' + err, success: 0 });
				console.log(err.response);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const hasInputErrors = () => {
		for (const i in rules) {
			let rule = rules[i];
			if (
				(rule != defaultRule && rule.name == 'default') ||
				rule.name == '' ||
				isNaN(rule.num_of_books_per_user) ||
				isNaN(rule.cost_per_day_late_return) ||
				isNaN(rule.duration_per_borrow)
			) {
				return true;
			}
		}
		return false;
	};

	const saveRulesToServer = () => {
		if (!rules || !hasChanged) return;

		if (hasInputErrors()) {
			setMsg({ text: 'Make sure the inputs are correct!', success: 0 });
			return;
		}

		setSaving(true);
		setMsg({ text: '', success: 0 });

		axios
			.put('/api/library-rules', rules)
			.then(res => {
				setChanged(false);
				getRulesFromServer();
			})
			.catch(err => {
				setMsg({ text: 'There was a problem: ' + err, success: 0 });
				console.log(err.response);
			})
			.finally(() => {
				setSaving(false);
			});
	};

	return (
		<div>
			<div className='d-flex justify-content-between mt-2 mb-2'>
				<h4 className='col-lg-4 pl-0'>Library Rules</h4>
				<div>
					{isSaving ? (
						<LoadingButton />
					) : (
						hasChanged && (
							<span className='d-flex'>
								<button
									type='button'
									className={
										'btn btn-secondary mr-2' + (hasChanged ? '' : ' disabled')
									}
									data-bs-dismiss='modal'
									onClick={() => {
										getRulesFromServer();
										setChanged(false);
									}}
								>
									Cancel
								</button>

								<button
									type='button'
									className={
										'btn btn-primary' + (hasChanged ? '' : ' disabled')
									}
									data-bs-dismiss='modal'
									onClick={saveRulesToServer}
								>
									Save
								</button>
							</span>
						)
					)}
				</div>
			</div>

			{msg && msg.text && <MessageAlert msg={msg.text} success={msg.success} />}

			<div className='overflow-auto'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Rule</th>
							<th scope='col'>Book limit per user (books)</th>
							<th scope='col'>Duration per borrow (days)</th>
							<th scope='col'>Cost per late for late return ($/day)</th>
						</tr>
					</thead>
					<tbody>
						{rules &&
							rules.map((rule, i) => (
								<tr key={i}>
									<th scope='row'>{rule.id}</th>
									<td>
										{rule == defaultRule ? (
											<input
												type='text'
												className='form-control'
												value={rule.name}
												disabled
											/>
										) : (
											<input
												type='text'
												className={
													'form-control' +
													(rule.name == '' ||
													(rule.name == 'default' && rule != defaultRule)
														? ' is-invalid'
														: '')
												}
												required
												onChange={e => {
													setChanged(true);
													let rules_copy = [...rules];
													rules_copy[i].name = e.target.value;
													setRules(rules_copy);
												}}
												value={rule.name}
											/>
										)}
									</td>
									<td>
										<input
											type='text'
											className={
												'form-control' +
												(rule.num_of_books_per_user == '' ||
												isNaN(rule.num_of_books_per_user)
													? ' is-invalid'
													: '')
											}
											required
											onChange={e => {
												setChanged(true);
												let rules_copy = [...rules];
												rules_copy[i].num_of_books_per_user = e.target.value;
												setRules(rules_copy);
											}}
											value={rule.num_of_books_per_user}
										/>
									</td>
									<td>
										<input
											type='text'
											className={
												'form-control' +
												(rule.duration_per_borrow == '' ||
												isNaN(rule.duration_per_borrow)
													? ' is-invalid'
													: '')
											}
											required
											onChange={e => {
												setChanged(true);
												let rules_copy = [...rules];
												rules_copy[i].duration_per_borrow = e.target.value;
												setRules(rules_copy);
											}}
											value={rule.duration_per_borrow}
										/>
									</td>
									<td>
										<input
											type='text'
											className={
												'form-control' +
												(rule.cost_per_day_late_return == '' ||
												isNaN(rule.cost_per_day_late_return)
													? ' is-invalid'
													: '')
											}
											required
											onChange={e => {
												setChanged(true);
												let rules_copy = [...rules];
												rules_copy[i].cost_per_day_late_return = e.target.value;
												setRules(rules_copy);
											}}
											value={rule.cost_per_day_late_return}
										/>
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

export default Rules;
