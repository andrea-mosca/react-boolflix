import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const SeriesContext = createContext();

function SeriesProvider({ children }) {
  const [series, setSeries] = useState([]);
  const [querySeries, setQuerySeries] = useState("");

  const fetchSeries = () => {
    axios
      .get(`${apiUrl}/search/tv?api_key=${apiKey}&query=${querySeries}`)
      .then((res) => {
        setSeries(res.data.results);
      });
  };
  useEffect(fetchSeries, [querySeries]);

  const serieData = { series, setQuerySeries };
  return (
    <SeriesContext.Provider value={serieData}>
      {children}
    </SeriesContext.Provider>
  );
}

function useSeries() {
  return useContext(SeriesContext);
}

export { SeriesProvider, useSeries };
