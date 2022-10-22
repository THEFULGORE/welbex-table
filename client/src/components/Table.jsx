import React from 'react';
import { useState } from 'react';
import './Table.scss';

const Table = ({ data, setData, firstIndex, lastIndex }) => {
	const [toggled, setToggled] = useState(false);
	const sortData = (column) => {
		switch (column) {
			case 'name':
				setData(
					data.sort((a, b) =>
						toggled ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
					)
				);
				break;
			case 'quantity':
				setData(data.sort((a, b) => (toggled ? b.quantity - a.quantity : a.quantity - b.quantity)));
				break;
			case 'distance':
				setData(data.sort((a, b) => (toggled ? b.distance - a.distance : a.distance - b.distance)));
				break;
			default:
				break;
		}
		setToggled(!toggled);
	};

	return (
		<table className="table">
			<tr>
				<th>
					<span>date</span>
				</th>
				<th>
					<span>
						name
						<p>
							<div
								class={toggled ? 'arrow-up' : 'arrow-down'}
								onClick={() => sortData('name')}
							></div>
						</p>
					</span>
				</th>
				<th>
					<span>
						quantity
						<p>
							<div
								class={toggled ? 'arrow-up' : 'arrow-down'}
								onClick={() => sortData('quantity')}
							></div>
						</p>
					</span>
				</th>
				<th>
					<span>
						distance
						<p>
							<div
								class={toggled ? 'arrow-up' : 'arrow-down'}
								onClick={() => sortData('distance')}
							></div>
						</p>
					</span>
				</th>
			</tr>
			{data.slice(firstIndex, lastIndex).map((el) => (
				<tr>
					<td>{new Date(el.dt).toLocaleDateString()}</td>
					<td>{el.name}</td>
					<td>{el.quantity}</td>
					<td>{el.distance}</td>
				</tr>
			))}
		</table>
	);
};

export default Table;
