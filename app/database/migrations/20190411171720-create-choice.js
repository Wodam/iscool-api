'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
		const Choice = queryInterface.createTable('Choice', {
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
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Choice')
  }
};
