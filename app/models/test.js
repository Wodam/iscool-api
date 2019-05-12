'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    id_teste: DataTypes.INTEGER,
    description_test: DataTypes.TEXT
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};