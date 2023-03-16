import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/713F+ivM9NL._AC_UL300_SR300,200_.jpg'
    alt='Saved'
  />
);
const Title = () => {
  return <h2>Saved</h2>;
};

const Author = () => <h4> Benjamin Hall</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
