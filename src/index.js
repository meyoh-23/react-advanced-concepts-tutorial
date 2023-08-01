import React from 'react';
import ReactDOM from 'react-dom/client';

// Css styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// working with lists
const books = [ 
{
  id:1,
  img :'https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg',
  title: 'American Prometheus',
  author: 'J. Robert Oppenheimer'
},
  {
    id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91pJQMkd5dL._AC_UL600_SR600,400_.jpg',
    title: 'Too Late',
    author: 'Colleen Hoover'
  },
  {
    id:3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL600_SR600,400_.jpg',
    title: 'Verity',
    author: 'Colleen Hoover'
  }
]

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
const Book = (props) => {
  console.log(props)
  const {img, title, author,} = props;
  return (
    <article className='book'>
    <img src={img}
    alt="bookImage"
    />
    <h1>{title}</h1>
    <h4>{author}</h4>
    </article>
  )
}

root.render(
  <BookList/>
);

