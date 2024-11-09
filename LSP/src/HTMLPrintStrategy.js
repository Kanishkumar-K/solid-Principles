const PrintStrategy = require('./PrintStrategy');

class HTMLPrintStrategy extends PrintStrategy {
    print(books) {
        let html = '<ul>';
        books.forEach(book => {
            html += `<li>${book.title} by ${book.author}</li>`;
        });
        html += '</ul>';
        console.log(html);
    }
}

module.exports = HTMLPrintStrategy;
