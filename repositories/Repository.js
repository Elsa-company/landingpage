/** @format */

// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
const baseDomain = 'http://localhost:5000/api';
// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs`;
// console.log('api', process.env.baseDomain);
// console.log('api', process.env.PUBLISHABLE_KEY, typeof process.env.stripe_publishableKey);
const axiosClient = axios.create({
	baseURL          : process.env.baseDomain,
	headers          : {
		'content-type' : 'application/json',
	},
	paramsSerializer : params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
	// Handle token here ...
	return config;
});

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	error => {
		throw error;
	},
);

export default axiosClient;
