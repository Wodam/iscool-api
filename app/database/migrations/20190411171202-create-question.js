'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
		const Question = queryInterface.createTable('Question', {
			id_question: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			img_question: {
				type: DataTypes.BLOB
			},
			text_question: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			description_question: {
				type: DataTypes.TEXT
			}
		});

		Question.associate = models => {
			Question.hasMany(models.Choice, {
				as: 'choices',
				foreignKey: 'id_question'
			});
		}

		return Question;
  },

  down: (queryInterface, DataTypes) => {
		return queryInterface.dropTable('Question')
  }
};
