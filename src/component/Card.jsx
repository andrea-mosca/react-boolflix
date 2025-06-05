export default function Card({
  image,
  title,
  originalTitle,
  language,
  valutation,
}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <span className="fw-bolder">Title: </span>
        <span>{title}</span>
        <div className="mt-1">
          <span className="fw-bolder">Original title: </span>
          <span>{originalTitle}</span>
        </div>
        <div className="mt-1">
          <span className="fw-bolder">Original language: </span>

          <span>{language}</span>
        </div>
        <div className="mt-1">
          <span className="fw-bolder">Valutation:</span>{" "}
          <span>{valutation}</span>
        </div>
      </div>
    </div>
  );
}
