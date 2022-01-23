const Sequelize = require('sequelize');
const db = require('../db');

const Wish = db.define('wish', {
	wishMessage: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	approved: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = Wish;
