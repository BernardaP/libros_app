'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.book.belongsToMany(models.library, {through: 'booksLibraries'})
      models.book.belongsTo(models.author);
      models.book.belongsToMany(models.genre, {through: 'booksGenres'})
    }
  };
  book.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    ebook: DataTypes.BOOLEAN,
    buy: DataTypes.STRING,
    isbn: DataTypes.STRING,
    pageCount: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    publishedDate: DataTypes.STRING,
    authorId:{
      type:DataTypes.INTEGER,
      references: {
        model: 'authors', 
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};