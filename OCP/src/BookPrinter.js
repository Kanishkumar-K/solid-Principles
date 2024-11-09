// src/BookPrinter.js
class BookPrinter {
    static printBooks(books) {
        books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }
}

module.exports = BookPrinter;
