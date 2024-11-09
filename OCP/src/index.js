const Library = require('./Library');
const BookPrinter = require('./BookPrinter');
const HTMLPrintStrategy = require('./HTMLPrintStrategy')

const library = new Library();
library.addBook('Python', 'XXXX');
library.addBook('Java', 'YYYY');

const books = library.getBooks();
BookPrinter.printBooks(books);

const htmlPrinter = new HTMLPrintStrategy();
htmlPrinter.print(books);


