'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
      marked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      random_question_number: {
        type: DataTypes.CHAR(1)
      },
      random_choice_number: {
        type: DataTypes.CHAR(1)
      },
      id_test: {
        type: DataTypes.INTEGER
      },
      id_question: {
        type: DataTypes.INTEGER
      },
      id_choice: {
        type: DataTypes.INTEGER
      }
    }, {});

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
  Answer.removeAttribute('id');
  return Answer;
};
