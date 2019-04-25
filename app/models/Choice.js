'use strict';

module.exports = function (sequelize, DataTypes) {
	const Choice = sequelize.define('Choice', {
		id_choice: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		trueness_choice: {
			type: DataTypes.CHAR
		},
		description_choice: {
			type: DataTypes.TEXT
		},
		id_question: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	Choice.associate = models => {
		Choice.belongsTo(models.Question, {
			as: 'question',
			foreignKey: 'id_question'
		});
	}

	return Choice;
};
