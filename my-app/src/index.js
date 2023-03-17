import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='./images/book-1.jpg'
    alt='Saved'
  />
);
const Title = () => {
  return <h2>Saved</h2>;
};

const Author = () => <h4> Benjamin Hall</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
