export default function Card({ title, originalTitle, language, valutation }) {
  return (
    <div className="card">
      <div className="movie-info">
        <h5>title:{title}</h5>
        <div>original title:{originalTitle}</div>
        <div>original language:{language}</div>
        <div>valutation:{valutation}</div>
      </div>
    </div>
  );
}
