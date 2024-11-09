// src/Library.js
class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        this.books.push({ title, author });
    }

    getBooks() {
        return this.books;
    }
}

module.exports = Library;
