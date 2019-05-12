'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const Test = queryInterface.createTable('Test', {
      id_test: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description_test: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    Test.associate = models => {
      Test.hasMany(models.Question, {
        as: 'questions',
        foreignKey: 'id_test'
      });
    }

    return Test;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Test');
  }
};
