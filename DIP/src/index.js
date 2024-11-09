// src/index.js
const Library = require('./Library');
const HTMLPrintStrategy = require('./HTMLPrintStrategy');

const htmlPrintStrategy = new HTMLPrintStrategy();

const libraryHtml = new Library(htmlPrintStrategy);
libraryHtml.addBook('Python', 'XXXX');
libraryHtml.addBook('Java', 'YYYY');

libraryHtml.printBooks(); 