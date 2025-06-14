import { useFilms } from "../../context/FilmsContext";
import { useSeries } from "../../context/SeriesContext";
import Card from "../Card";
const imgBaseUrl = "https://image.tmdb.org/t/p/w342";

export default function Main() {
  const { films } = useFilms();
  const { series } = useSeries();

  return (
    <main>
      <div className="container">
        <div className="row row-cols-2 g-5">
          <div className="col">
            <div className="my-3 ps-3 fw-bolder fs-4 title-categories">
              FILMS LIST:
            </div>
            <div className="row row-cols-2 g-2">
              {films && films.length > 0 ? (
                films.map((film, index) => (
                  <div className="col" key={index}>
                    <Card
                      key={index}
                      image={`${imgBaseUrl}${film.poster_path}`}
                      title={film.title}
                      originalTitle={film.original_title}
                      language={film.original_language}
                      valutation={film.vote_average}
                      overview={film.overview}
                    />
                  </div>
                ))
              ) : (
                <p>Nessun film trovato.</p>
              )}
            </div>
          </div>

          <div className="col">
            <div className="my-3 ps-3 fw-bolder fs-4 title-categories">
              SERIES LIST:
            </div>
            <div className="row row-cols-2 g-2">
              {series && series.length > 0 ? (
                series.map((serie, index) => (
                  <div className="col" key={index}>
                    <Card
                      key={index}
                      image={`${imgBaseUrl}${serie.poster_path}`}
                      title={serie.name}
                      originalTitle={serie.original_name}
                      language={serie.original_language}
                      valutation={serie.vote_average}
                      overview={serie.overview}
                    />
                  </div>
                ))
              ) : (
                <p>Nessuna serie trovata.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
