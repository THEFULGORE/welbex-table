import axios from 'axios';

const $host = axios.create({
	baseURL: 'http://localhost:8080/api/',
});

export const getData = async () => {
	const res = await $host.get();
	return res;
};

export const filterName = async (name) => {
	const res = await $host.get('name', {
		params: {
			name,
		},
	});
	return res;
};

export const filterData = async (column, condition, value) => {
	const res = await $host.get('filter', {
		params: {
			column,
			condition,
			value,
		},
	});
	return res;
};
