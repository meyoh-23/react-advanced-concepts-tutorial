import React from 'react'

const Book = (props) => {
// attribute, eventHandler
// onClick, onMouseOver
const clickHander = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello from the button bro!');
};

const complexExample = (author) => {
  // passed as an arrow function
    console.log(author)
};

const {img, title, author,} = props;
return (
    // onMouseOver event Handler
    <article className='book' onMouseOver={()=>{
        console.log(title)
    }}>
    <img src={img}
    alt="bookImage"
    />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHander } >onClick Example</button>
    <button type="button" onClick={()=>complexExample(author)} >A more Complex Example</button>
    </article>
    )
}
export default Book