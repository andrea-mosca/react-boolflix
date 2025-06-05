import { useFilms } from "../../context/FilmsContext";
import Card from "../Card";
export default function Main() {
  const { films } = useFilms();
  return (
    <main>
      <div className="container">
        <div className="row row-cols-4">
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
      </div>
    </main>
  );
}
