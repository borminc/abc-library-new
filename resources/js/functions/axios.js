import axios from 'axios';
import { getCookie } from './cookies';

const defaultOptions = {
	headers: {
		'Content-Type': 'application/json',
	},
};

// Set the AUTH token for any request
axios.interceptors.request.use(function (config) {
	const token = getCookie('token');
	if (config.headers.Authorization == 'NONE') config.headers = {};
	else {
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		config.headers.Accept = 'application/json';
	}
	return config;
});

export default axios;
