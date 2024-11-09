// src/index.js
const Library = require('./Library');
const BookPrinter = require('./BookPrinter');

const library = new Library();
library.addBook('Python', 'XXXX');
library.addBook('Java', 'YYYY');

const books = library.getBooks();

BookPrinter.printBooks(books);
