class BookCard {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Generatebooks {
  constructor() {
    this.book = [];
  }

    addBook=(title, author) => {
      if (title === '' || author === '') {
        return null;
      }
      const newBook = new BookCard(title, author);
      this.book.push(newBook);
      return this.showBooks();
    }

      saveBooks=() => {
        localStorage.setItem('data', JSON.stringify(this.book));
      }

    showBooks = () => {
      const bookList = document.getElementById('book-list');
      bookList.innerHTML = '';
      // Header for list books page
      const h1 = document.createElement('h1');
      h1.textContent = 'All Awesome Books';
      bookList.appendChild(h1);
      this.book.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
          this.book.splice(index, 1);
          this.showBooks();
          this.saveBooks();
        });
        li.appendChild(removeBtn);
        bookList.appendChild(li);
      });
    }

    displayCards = () => {
      const titleInput = document.querySelector('#title');
      const authorInput = document.querySelector('#author');
      const submit = document.querySelector('#add-button');
      const form = document.querySelector('.form');
      submit.addEventListener('click', () => {
        this.addBook(titleInput.value, authorInput.value);
        this.saveBooks();
        return form.reset();
      });
    }

    reloadWindow =() => {
      window.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('data')) {
          this.book = JSON.parse(localStorage.getItem('data'));
          this.showBooks();
        }
      });
    }
}
export default Generatebooks;