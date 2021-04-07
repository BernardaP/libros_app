'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.library.belongsToMany(models.book, {through: 'booksLibraries'})
    }
  };
  library.init({
    comments: DataTypes.TEXT,
    readingDate: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'library',
  });
  return library;
};