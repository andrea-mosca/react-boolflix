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
        <h5>title:{title}</h5>
        <div>original title:{originalTitle}</div>
        <div>original language:{language}</div>
        <div>valutation:{valutation}</div>
      </div>
    </div>
  );
}
