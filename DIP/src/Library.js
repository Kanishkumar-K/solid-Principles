// src/Library.js
class Library {
    constructor(printStrategy) {
        this.books = [];
        this.printStrategy = printStrategy; 

    }

    addBook(title, author) {
        this.books.push({ title, author });
    }

    getBooks() {
        return this.books;
    }

    printBooks() {
        this.printStrategy.print(this.books); 
    }
}

module.exports = Library;
