import { useState } from "react";
import { useFilms } from "../context/FilmsContext";
export default function Searchbar() {
  const [filter, setFilter] = useState("");
  const { setQuery } = useFilms();

  const handleFormFilterSubmit = (e) => {
    e.preventDefault();

    setQuery(filter);
  };
  return (
    <nav className="navbar bg-black">
      <div className="container-fluid">
        <a className="navbar-brand">BOOLFLIX</a>
        <form className="d-flex" onSubmit={handleFormFilterSubmit}>
          <input
            className="form-control me-2"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
