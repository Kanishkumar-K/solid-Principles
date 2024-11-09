// src/index.js
const Library = require('./Library');
const HTMLPrintStrategy = require('./HTMLPrintStrategy');
const CSVPrintStrategy = require('./CSVPrintStrategy');

const library = new Library();
library.addBook('Python', 'XXXX');
library.addBook('Java', 'YYYY');

const books = library.getBooks();

const htmlPrinter = new HTMLPrintStrategy();
htmlPrinter.print(books);

const CSVPrinter = new CSVPrintStrategy();
CSVPrinter.print(books);