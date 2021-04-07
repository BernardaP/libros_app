'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    

    await queryInterface.bulkDelete('libraries', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkLibraries = await queryInterface.bulkInsert('libraries', [
      {
        comments: 'I love this book, so far one of my favs when it comes to scifi',
        rating: 5,
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true})
    console.log('bulk insert library: ', bulkLibraries)

    await queryInterface.bulkDelete('books', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkBooks = await queryInterface.bulkInsert('books', [
      {
        title: 'Leviathan Wakes',
        description: 'The first book in the revolutionary New York Times bestselling Expanse series, a modern masterwork of science fiction. Leviathan Wakes introduces Captain James Holden, his crew, and Detective Miller as they unravel a horrifying solar system wide conspiracy that begins with a single missing girl.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91npjUXXkzL.jpg',
        price: 14.39,
        ebook: true,
        buy: 'https://www.amazon.com/Leviathan-Wakes-James-S-Corey/dp/0316129089',
        isbn: '978-0316129084',
        pageCount: 592,
        publisher: 'Orbit',
        publishedDate: 'June 15, 2011',

        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true})
    console.log('bulk insert books: ', bulkBooks)

    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkUsers = await queryInterface.bulkInsert('users', [
      { email: 'bernims6@gmail.com',
      name: 'Bernada Pierce',
      password: bcrypt.hashSync('BernardaPierce', 12),      
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], { returning: true });
    console.log('bulk insert users: ', bulkUsers)
    
    await queryInterface.bulkDelete('authors', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkAuthors = await queryInterface.bulkInsert('authors', [
      {
        firstName: 'James',
        lastName: 'S. A. Corey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true})
    console.log('bulk insert author: ', bulkAuthors)
    
    await queryInterface.bulkDelete('genres', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkGenres = await queryInterface.bulkInsert('genres', [
      {
        name: 'Science Fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true})
    console.log('bulk insert genre: ', bulkGenres)

    await queryInterface.bulkDelete('booksLibraries', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkbooksLibraries = await queryInterface.bulkInsert('booksLibraries', [
      {
        bookId: bulkBooks[0].id,
        libraryId: bulkLibraries[0].id,
        createdAt: new Date(),
        updatedAt: new Date()

      },
    ], {returning: true})
    console.log('mapping of libraries to books: ', bulkbooksLibraries )

    await queryInterface.bulkDelete('booksGenres', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkbooksGenres = await queryInterface.bulkInsert('booksGenres', [
      {
        bookId: bulkBooks[0].id,
        genreId: bulkGenres[0].id,
        createdAt: new Date(),
        updatedAt: new Date()

      },
    ], {returning: true})
    console.log('mapping of books to genres: ', bulkbooksGenres )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('libraries', null, {})
  }
};
