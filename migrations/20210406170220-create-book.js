'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      ebook: {
        type: Sequelize.BOOLEAN
      },
      buy: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      pageCount: {
        type: Sequelize.INTEGER
      },
      publisher: {
        type: Sequelize.STRING
      },
      publishedDate: {
        type: Sequelize.STRING
      },
      readingDate: {
        type: Sequelize.DATE
      },
      comments: {
        type: Sequelize.TEXT
      },
      loaned: {
        type: Sequelize.TEXT
      },
      loanedDate: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      authorId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};