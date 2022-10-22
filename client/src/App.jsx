import axios from 'axios';
import { useEffect, useState } from 'react';
import { getData } from './http/index';
import './App.css';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	useEffect(() => {
		setLoading(true);
		getAllData();
	}, []);

	const getAllData = () => {
		getData()
			.then((res) => {
				setData(res.data.rows);
			})
			.then(setLoading(false));
	};

	const lastIndex = currentPage * rowsPerPage;
	const firstIndex = lastIndex - rowsPerPage;

	const setPage = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="container">
			<Filter setData={setData} getAllData={getAllData} />
			<Table data={data} setData={setData} firstIndex={firstIndex} lastIndex={lastIndex} />
			<Pagination
				rowsPerPage={rowsPerPage}
				totalRecords={data.length}
				setPage={setPage}
				currentPage={currentPage}
				lastPage={rowsPerPage}
			/>
			<Footer />
		</div>
	);
}

export default App;
