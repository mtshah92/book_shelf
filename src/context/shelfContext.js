import { createContext, useState } from "react";
import { books } from "../db/books";

export const ShelfContext = createContext();

export const ShelfProvider = ({ children }) => {
  const [bookList, setBookList] = useState(books);
  const [search, setSearch] = useState();
  const updateCategory = (id, value) => {
    setBookList(
      bookList.map((item) => {
        if (item.id === id) {
          return { ...item, category: value };
        } else return item;
      })
    );
  };

  return (
    <ShelfContext.Provider
      value={{ bookList, updateCategory, setSearch, search }}
    >
      {children}
    </ShelfContext.Provider>
  );
};
