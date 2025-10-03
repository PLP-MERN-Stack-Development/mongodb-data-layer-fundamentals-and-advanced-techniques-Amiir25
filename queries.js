// Task - 1

// Create new database called plp_bookstore
const dbName = 'use plp_bookstore'
// Create a collection called books
const collectionName = 'db.createCollection(books)'


// Task - 2

// Insert 10 book documents into your collection
const insert = '
    db.books.insertMany([
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', published_year: 1960, price: 12.99, in_stock: true, pages: 336, publisher: 'j. B. Lippincott & Co.' },
        { title: '1984', author: 'George Orwell', genre: 'Dystopian', published_year: 1949, price: 10.99, in_stock: true, pages: 328, publisher: 'Secker & Warburg' },
        { title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', published_year: 1932, price: 11.5, in_stock: false, pages: 311, publisher: 'Chatto & Windus' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', published_year: 1937, price: 14.99, in_stock: true, pages: 310, publisher: 'George Allen & Unwin' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', published_year: 1951, price: 8.99, in_stock: true, pages: 224, publisher: 'Little, Brown and Company' },
        { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', published_year: 1813, price: 7.99, in_stock: true, pages: 432, publisher: 'T. Egerton, Whitehall' },
        { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', published_year: 1954, price: 19.99, in_stock: true, pages: 1178, publisher: 'Allen & Unwin' },
        { title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', published_year: 1945, price: 8.5, in_stock: false, pages: 112, publisher: 'Secker & Warburg' },
        { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', published_year: 1988, price: 10.99, in_stock: true, pages: 197, publisher: 'HarperOne' },
        { title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', published_year: 1851, price: 12.5, in_stock: false, pages: 635, publisher: 'Harper & Brothers' }
    ])
'
// Find all books in a specific genre
const specificGenre = "db.books.find({ genre: 'Fiction' })"
// Find books published after a certain year
const afterCertainYear = 'db.books.find({ published_year: { $gt: 1950 } })'
// Find books by a specific author
const specificAuthor = "db.books.find({ author: 'Paulo Coelho' })"
// Update the price of a specific book
const updatePrice = "db.books.updateOne( { title: 'The Alchemist' }, { $set: { price: 15.50 } } )"
// Delete a book by its title
const deleteBook = "db.books.deleteOne({ title: 'The Alchemist' })"

//Task - 3

// Find books that are both in stock and published after 2010
const inStockAndPublished = "db.books.find( in_stock: true, published_year: { $gt: 2010 } )"
// Use projection to return only the title, author, and price fields in your queries
const projection = "db.books.find( {}, { title: 1, author: 1, price: 1, _id: 0 } )"
// Sorting by price (both ascending and descending)
const sortASC = 'db.books.find().sort({ price: 1 })' // Ascending
const sortDSC = 'db.books.find().sort({ price: -1 })' // Descending

