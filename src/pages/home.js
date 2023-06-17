import { useContext } from "react";
import { ShelfContext } from "../context/shelfContext";
import "./home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { updateCategory, bookList } = useContext(ShelfContext);

  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/search">Search Page</NavLink>

      <h2>Currently Reading</h2>
      <hr />
      {bookList
        .filter(({ category }) => category === "Currently Reading")
        .map((item) => {
          return (
            <div key={item.id} className="book-list">
              <img src={item.img} alt={item.title} width="150" height="150" />
              <p>
                Title: <b>{item.title}</b>
              </p>
              <p>
                Author:<b> {item.author}</b>
              </p>
              <select
                name="category"
                id="category"
                onChange={(e) => updateCategory(item.id, e.target.value)}
              >
                <option selected="selected">Currently Reading</option>
                <option>Want to Read</option>
                <option>Read</option>
                <option>None</option>
              </select>
            </div>
          );
        })}

      <h2>Want to Read</h2>
      <hr />
      {bookList
        .filter(({ category }) => category === "Want to Read")
        .map((item) => {
          return (
            <div key={item.id} className="book-list">
              <img src={item.img} alt={item.title} width="150" height="150" />
              <p>
                Title: <b>{item.title}</b>
              </p>
              <p>
                Author: <b>{item.author}</b>
              </p>
              <select
                name="category"
                id="category"
                onChange={(e) => updateCategory(item.id, e.target.value)}
              >
                <option>Currently Reading</option>
                <option selected="selected">Want to Read</option>
                <option>Read</option>
                <option>None</option>
              </select>
            </div>
          );
        })}

      <h2>Read</h2>
      <hr />
      {bookList
        .filter(({ category }) => category === "Read")
        .map((item) => {
          return (
            <div key={item.id} className="book-list">
              <img src={item.img} alt={item.title} width="150" height="150" />
              <p>
                Title:<b> {item.title}</b>
              </p>
              <p>
                Author: <b>{item.author}</b>
              </p>
              <select
                name="category"
                id="category"
                onChange={(e) => updateCategory(item.id, e.target.value)}
              >
                <option>Currently Reading</option>
                <option>Want to Read</option>
                <option selected="selected">Read</option>
                <option>None</option>
              </select>
            </div>
          );
        })}
    </div>
  );
};
