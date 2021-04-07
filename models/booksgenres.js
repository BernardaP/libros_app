'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booksGenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  booksGenres.init({
    bookId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booksGenres',
  });
  return booksGenres;
};