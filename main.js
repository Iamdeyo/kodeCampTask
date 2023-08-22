// 1. create a `Book` constructor function
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}
Book.prototype.getBook = function () {
  return { title: this.title, author: this.author, genre: this.genre };
};

//2. create a `LibraryCatalog` constructor function
function LibraryCatalog() {
  this.books = [];
}

// 3a. `addBook`: add a book to the catalog
LibraryCatalog.prototype.addBook = function (book) {
  this.books.push(book);
};

// 3d. `getBooksByAuthor`: return books given an author name as an argument
LibraryCatalog.prototype.getBooksByAuthor = function (author) {
  const books = this.books.filter((book) => book.author === author);
  return books;
};

//3c. `Symbol.iterator`: returns the same generator function
LibraryCatalog.prototype.bookIterator = function* () {
  let index = 0;
  while (index < this.books.length) {
    yield this.books[index++];
  }
};

// 3b. `bookIterator`: a generator function
LibraryCatalog.prototype[Symbol.iterator] = function () {
  return this.bookIterator();
};

const book1 = new Book('title1', 'author1', 'genre1');
const book2 = new Book('title2', 'author2', 'genre2');
const book3 = new Book('title3', 'author3', 'genre3');

const libraryCatalog = new LibraryCatalog();

// Add a book
libraryCatalog.addBook(book1.getBook());
libraryCatalog.addBook(book2.getBook());
libraryCatalog.addBook(book3.getBook());

// get all books in the library catalog
console.log(libraryCatalog.books);

// get all books in the library catalog using the author
console.log(libraryCatalog.getBooksByAuthor('author1'));

for (const books of libraryCatalog.bookIterator()) {
  console.log(books);
}
for (const books of libraryCatalog) {
  console.log(books);
}
