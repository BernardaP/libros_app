model:create statements and associations:

sequelize model:create --name library --attributes comments:text,readingDate:date,rating:integer,completed:boolean,userId:integer 

sequelize model:create --name book --attributes title:string,description:text,image:string,price:smallmoney,ebook:boolean,buy:string,isbn:string,pageCount:integer,publisher:string,publishedDate:string,authorId:integer

sequelize model:create --name booksLibraries --attributes bookId:integer,libraryId:integer

sequelize model:create --name booksGenres --attributes bookId:integer,genreId:integer

sequelize model:create --name genre --attributes name:string

sequelize model:create --name author --attributes firstName:string,lastName:string

ASSOCIATIONS:
models/library.js
models.library.belongsToMany(models.book, {through: "booksLibraries"})

models/book.js
models.book.belongsTo(models.author);
models.book.belongsToMany(models.library, {through: "booksLibraries"})
models.book.belongsToMany(models.genres, {through: "booksGenres"})

models/user.js
models.user.hasMany(models.library)

models/author.js
models.author.hasMany(models.book)

models/genre.js
models.genre.belongsToMany(models.book, {through: "booksGenres"})


ROUTES:
After login
Home: 
Get functionality for searching book title
Get functionality for populating with results
Post functionality for selecting a book 

Bookshelf:
Get functionality for populating books list including image, title and author, details button and delete button

Details Book:
Get functionality for populating book title, author, description, comments, rating, completed, loaned

Profile  