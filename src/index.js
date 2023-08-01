import React from 'react';
import ReactDOM from 'react-dom/client';

// Css styles
import './index.css';
// named import
import {books} from './books';
//default import
import Book from './Book'

const root = ReactDOM.createRoot(document.getElementById('root'));

// working with lists

function BookList() {
  return (
    <section className="booklist "> { books.map((book, index) => {
      const {img, title, author} = book
      return (
        // passing the key to eliminate the error that is generated without it.
        <Book key ={book.id} {...book}></Book>
      )
    })
    }
    </section>
  )
};

// actual description of the book

root.render(
  <BookList/>
);

