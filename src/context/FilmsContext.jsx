import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const FilmsContext = createContext();

function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [queryFilms, setQueryFilms] = useState("");

  const fetchFilms = () => {
    axios
      .get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${queryFilms}`)
      .then((res) => {
        setFilms(res.data.results);
      });
  };
  useEffect(fetchFilms, [queryFilms]);

  const filmData = { films, setQueryFilms };
  return (
    <FilmsContext.Provider value={filmData}>{children}</FilmsContext.Provider>
  );
}

function useFilms() {
  return useContext(FilmsContext);
}

export { FilmsProvider, useFilms };
