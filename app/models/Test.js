'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    id_test: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description_test: {
      type: DataTypes.TEXT
    }
  });
  Test.associate = models => {
    Test.hasMany(models.Question, {
      as: 'questions',
      foreignKey: 'id_test'
    });
  }

  return Test;
};
