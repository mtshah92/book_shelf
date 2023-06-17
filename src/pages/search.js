import { useContext } from "react";
import { ShelfContext } from "../context/shelfContext";
import "./search.css";
import { NavLink } from "react-router-dom";

export const Search = () => {
  const { setSearch, bookList, search, updateCategory } =
    useContext(ShelfContext);
  const searchedData = bookList.filter(({ title }) => title.includes(search));

  return (
    <div>
      <div className="search-input">
        <NavLink to="/">Back</NavLink>
        <input
          type="text"
          placeholder="Enter the Title"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {searchedData.map((item) => {
        return (
          <div key={item.id} className="search-list">
            <img src={item.img} alt={item.title} width="150" height="150" />
            <p>Title: {item.title}</p>
            <p>Author: {item.author}</p>
            <p>category: {item.category}</p>
            <select
              name="category"
              id="category"
              onChange={(e) => updateCategory(item.id, e.target.value)}
            >
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
              <option value="None">None</option>
            </select>
          </div>
        );
      })}
    </div>
  );
};
