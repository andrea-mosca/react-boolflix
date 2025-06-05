import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const query = "Harry";
const FilmsContext = createContext();

function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");

  const fetchFilms = () => {
    axios
      .get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`)
      .then((res) => {
        console.log(res.data.results);
        setFilms(res.data.results);
      });
  };
  useEffect(fetchFilms, [query]);

  const filmData = { films, setQuery };
  return (
    <FilmsContext.Provider value={filmData}>{children}</FilmsContext.Provider>
  );
}

function useFilms() {
  return useContext(FilmsContext);
}

export { FilmsProvider, useFilms };
