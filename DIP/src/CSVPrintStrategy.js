const PrintStrategy = require('./PrintStrategy');

class CSVPrintStrategy extends PrintStrategy {
    print(books) {
        let csv = 'Title, Author\n';
        books.forEach(book => {
            csv += `${book.title}, ${book.author}\n`;
        });
        console.log(csv);
    }
}

module.exports = CSVPrintStrategy;
