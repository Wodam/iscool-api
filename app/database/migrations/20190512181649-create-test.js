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
			name_test: {
				allowNull: false,
				type: Sequelize.TEXT
			},
      description_test: {
        type: Sequelize.TEXT
      }
    });


    return Test;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Test');
  }
};
