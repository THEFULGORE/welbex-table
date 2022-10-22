const db = require('../db');
class controller {
	async getData(req, res) {
		const data = await db.query('SELECT * FROM data');
		res.json(data);
	}
	async getName(req, res) {
		let { name } = req.query;
		const data = await db.query(
			`SELECT * FROM data WHERE LOWER(name) = LOWER('${name}') ORDER BY id ASC`
		);
		res.json(data);
	}
	async filterData(req, res) {
		let { column, condition, value } = req.query;
		let data;
		switch (condition) {
			case 'greater':
				data = await db.query(`SELECT * FROM data WHERE ${column} > ${value} ORDER BY id ASC`);
				break;
			case 'less':
				data = await db.query(`SELECT * FROM data WHERE ${column} < ${value} ORDER BY id ASC`);
				break;
			case 'equal':
				data = await db.query(`SELECT * FROM data WHERE ${column} = ${value} ORDER BY id ASC`);
				break;
		}
		res.json(data);
	}
}

module.exports = new controller();
