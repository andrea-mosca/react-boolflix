import { useFilms } from "../../context/FilmsContext";
import { useSeries } from "../../context/SeriesContext";
import Card from "../Card";
export default function Main() {
  const { films } = useFilms();
  const { series } = useSeries();
  return (
    <main>
      <div className="container">
        <div className="row row-cols-2 gap-5">
          <div className="row row-cols-3">
            {films && films.length > 0 ? (
              films.map((film, index) => (
                <div className="col" key={index}>
                  <Card
                    key={index}
                    title={film.title}
                    originalTitle={film.original_title}
                    language={film.original_language}
                    valutation={film.vote_average}
                  />
                </div>
              ))
            ) : (
              <p>Nessun film trovato.</p>
            )}
          </div>

          <div className="row row-cols-3">
            {series && series.length > 0 ? (
              series.map((serie, index) => (
                <div className="col" key={index}>
                  <Card
                    key={index}
                    title={serie.name}
                    originalTitle={serie.original_name}
                    language={serie.original_language}
                    valutation={serie.vote_average}
                  />
                </div>
              ))
            ) : (
              <p>Nessuna serie trovata.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
