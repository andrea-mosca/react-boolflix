import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function FilterSelect() {
  const [genreFilm, setGenreFilm] = useState([]);
  const [genreSerie, setGenreSerie] = useState([]);
  const [allGenre, setAllGenre] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/genre/movie/list?api_key=${apiKey}&language=it-IT`)
      .then((res) => {
        // console.log("Risposta API:", res.data.genres);
        setGenreFilm(res.data.genres);
      });

    axios
      .get(`${apiUrl}/genre/tv/list?api_key=${apiKey}&language=it-IT`)
      .then((res) => {
        // console.log("Risposta API:", res.data.genres);
        setGenreSerie(res.data.genres);
      });
  }, []);

  useEffect(() => {
    const combined = [...genreFilm, ...genreSerie];

    const combinedFiltered = combined.filter((genre, index, self) => {
      return index === self.findIndex((g) => g.name === genre.name);
    });

    setAllGenre(combinedFiltered);
  }, [genreFilm, genreSerie]);

  return <div>ciao</div>;
  // <div className="form-floating">
  //   <select
  //     className="form-select"
  //     id="floatingSelect"
  //     aria-label="Floating label select example"
  //   >
  //     <option selected>Open this select menu</option>
  //     <option value="1">One</option>
  //     <option value="2">Two</option>
  //     <option value="3">Three</option>
  //   </select>
  //   <label for="floatingSelect">Works with selects</label>
  // </div>
}
