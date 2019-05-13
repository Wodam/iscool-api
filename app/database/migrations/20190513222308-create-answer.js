'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const Answer = queryInterface.createTable('Answers', {
      marked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      random_question_number: {
        type: Sequelize.CHAR(1)
      },
      random_choice_number: {
        type: Sequelize.CHAR(1)
      },
      id_test: {
        type: Sequelize.INTEGER
      },
      id_question: {
        type: Sequelize.INTEGER
      },
      id_choice: {
        type: Sequelize.INTEGER
      },
    });

    Answer.associate = models => {
      Answer.belongsTo(models.Question, {
        as: 'question',
        foreignKey: 'id_question'
      });
    }
    Answer.associate = models => {
      Answer.belongsTo(models.Choice, {
        as: 'choice',
        foreignKey: 'id_choice'
      });
    }
    Answer.associate = models => {
      Answer.belongsTo(models.Test, {
        as: 'test',
        foreignKey: 'id_test'
      });
    }


    return Answer;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};
