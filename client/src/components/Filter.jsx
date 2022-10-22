import React from 'react';
import { useState } from 'react';
import { filterData, filterName } from '../http';
import './Filter.scss';
const Filter = ({ setData, getAllData }) => {
	const [column, setColumn] = useState('');
	const [condition, setCondition] = useState('');
	const [filterValue, setFilterValue] = useState();
	const [name, setName] = useState('');

	const applyFilter = () => {
		if (name) {
			filterName(name).then((res) => setData(res.data.rows));
		}
		if (column && condition && filterValue) {
			filterData(column, condition, filterValue).then((res) => {
				setData(res.data.rows);
			});
		}
	};

	return (
		<div className="filter">
			<h1>Фильтры</h1>
			<div className="filter__container">
				<div className="filter__column">
					<select name="column" id="column" onChange={(e) => setColumn(e.target.value)}>
						<option value="">Выберите колонку</option>
						<option value="name">Name</option>
						<option value="quantity">Quantity</option>
						<option value="distance">Distance</option>
					</select>
				</div>
				<div>
					{column !== '' && column !== 'name' ? (
						<div className="filter__condition">
							<select
								name="condition"
								id="condition"
								onChange={(e) => setCondition(e.target.value)}
							>
								<option value="">Выберите условие</option>
								<option value="greater">Больше чем</option>
								<option value="less">Меньше чем</option>
								<option value="equal">Равно</option>
							</select>
							<input
								type="text"
								placeholder="значение фильтрации"
								className="filter__input"
								onChange={(e) => setFilterValue(e.target.value)}
							/>
						</div>
					) : (
						column !== '' && (
							<input
								type="text"
								placeholder="введите название"
								className="filter__input"
								onChange={(e) => setName(e.target.value)}
							/>
						)
					)}
				</div>
			</div>
			<div className="filter__buttons">
				<button onClick={() => applyFilter()}>Применить фильтр</button>
				<button onClick={() => getAllData()}>Сбросить фильтр</button>
			</div>
		</div>
	);
};

export default Filter;
