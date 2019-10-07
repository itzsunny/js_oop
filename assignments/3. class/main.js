

class Book {
    constructor (title, genre, author, read, date) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = read;
      this.date = new Date(date) || Date.now();
    }
  }
    
  class Booklist {
    constructor (book) {
      this.books = [];
      this.books.push(book);
    }
 markedAsRead () {
    return this.books.filter (book => book.read);
  }

 markedNotRead () {
    return this.books.filter (book => !book.read);
  }

 currentBook () {
    for (let i = 0; i < this.books.length; ++i) {
      if (!this.books[i].read) {
        return this.books[i];
      }
    }
  }

  nextBook () {
    return this.books[this.books.indexOf (this.currentBook) + 1];
  }

  lastBook () {
    return this.books[this.books.indexOf (this.currentBook) - 1];
  }

  allBooks () {
    return this.books;
  }

  add (book) {
    this.books.push(book);
  }

  finishCurrentBook () {
    this.currentBook.date = Date.now();
    this.currentBook.read = true;
  }
}