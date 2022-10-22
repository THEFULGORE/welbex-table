import React from 'react';
import { useMemo } from 'react';
import './Pagination.scss';

const Pagination = ({ rowsPerPage, totalRecords, setPage, currentPage, lastPage }) => {
	const pageNumbers = useMemo(() => {
		let tempNumbers = [];
		for (let i = 1; i <= Math.ceil(totalRecords / rowsPerPage); i++) {
			tempNumbers.push(i);
		}
		return tempNumbers;
	}, [totalRecords, rowsPerPage]);

	const paginatePrev = () => {
		if (currentPage !== 1) {
			setPage(currentPage - 1);
		}
	};

	const paginateNext = () => {
		if (currentPage !== lastPage) {
			setPage(currentPage + 1);
		}
	};

	return (
		<div className="pagination">
			<button onClick={() => paginatePrev()}>&laquo;</button>
			{pageNumbers.map((number) => (
				<button
					className={number === currentPage ? 'selected' : ''}
					key={number}
					onClick={() => setPage(number)}
				>
					{number}
				</button>
			))}
			<button onClick={() => paginateNext()}>&raquo;</button>
		</div>
	);
};

export default Pagination;
