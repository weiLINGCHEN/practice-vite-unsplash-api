import { useState } from "react";
import { useGlobalValue } from "./context";

const SearchForm = () => {
  const { searchValue, setSearchValue } = useGlobalValue();
  const filterImg = (e) => {
    e.preventDefault();
    const newSearchValue = e.target.elements.search.value;
    if (!newSearchValue) return;
    setSearchValue(newSearchValue);
  };
  return (
    <section>
      <h1 className="title">Gallery</h1>
      <form className="search-form" onSubmit={filterImg}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
