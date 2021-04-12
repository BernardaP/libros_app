# Libros - Capstone Project


## Project Description 
Libros is a full-stack application that a book lover can use to catalogue their books by creating a virtual library. Libros allows the user to create a library/bookshelf by adding books using a search bar. 

The user searches a book by title and chooses from the displayed list of results. The results are books displaying a title, and image. Each result has a button that saves the book to the user’s library.

The library displays images of book covers and its titles, when the user clicks a book cover, a new page displays detailed information of the book. In this page the user can write comments about the book, rate the book, add a loaning date, name of person loaned it and indicate if the book has been read completely. 

The user has the ability to delete a book from the library.

## Technologies used
- Node.js
- Sequelize
- Express
- Passport
- Bcrypt
- JavaScript
- EJS 
- CSS 
- Materialize
- VSCode
- GitHub
- Google Chrome Developer Tools

## Installation Instructions
1. Fork and clone the repo to your local machine
2. Install node modules from the package.json
3. Create a database for the project: `createdb libros_app` 
4. Run migrations and populate the database with the seeder file
5. Use `nodemon` to start the application
6. Open browser on `localhost:3000`

## User Stories
### MVP Goals
- As a user, I want to populate my library easily and fast by searching a book by title
- As a user, I want to choose the book I want to add to my library 
- As a user, I would like to see the books in my library as a list or as book covers 
- As a user, I want an option to see more information about each book.
- As a user, I want to add my own comments or a review to my book.
- As a user, I want to rate my books 
- As a user, I want to mark a book as “finish reading”

## Wireframes

![Home Page](https://trello-attachments.s3.amazonaws.com/606a43183390f203a249fab2/6073bbb12eb15c42f6f35c4b/ca01f754c6f0b69b087b75a6da3f3fcd/Screen_Shot_2021-04-05_at_1.57.51_AM.png)

![Library Page](https://trello-attachments.s3.amazonaws.com/606a43183390f203a249fab2/6073bbb12eb15c42f6f35c4b/d1c23f566b81681964a64f113aecb784/Screen_Shot_2021-04-05_at_2.31.41_AM.png)

![Book Page](https://trello-attachments.s3.amazonaws.com/606a43183390f203a249fab2/6073bbb12eb15c42f6f35c4b/f047456f3f0149910fd24f285f0c0a77/Screen_Shot_2021-04-05_at_2.51.09_AM.png)

![Add Book Page](https://trello-attachments.s3.amazonaws.com/606a43183390f203a249fab2/6073bbb12eb15c42f6f35c4b/ab44f34e707ccaf9a03fa483ca935c00/Screen_Shot_2021-04-05_at_2.22.10_AM.png)

## ERD
![Models and Associations](https://trello-attachments.s3.amazonaws.com/606a43183390f203a249fab2/6073bd12c24bf86db8991e0c/c9d2bcc6f85166868919e0586fe4f00f/libros_app_(1).png)

## Future Features
- Organize the library alphabetically by genre/category, by title, or by author.
- Set an alarm for loaned books.
- Search within the library.
- Add a “wanted” books feature with a link to buy them.
- Create a library of books that the user’s friends want/like.
- Give user the option to change the bookshelf appearance.




