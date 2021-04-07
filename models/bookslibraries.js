'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booksLibraries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  booksLibraries.init({
    bookId: DataTypes.INTEGER,
    libraryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booksLibraries',
  });
  return booksLibraries;
};