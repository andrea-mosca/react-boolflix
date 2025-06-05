import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  image,
  title,
  originalTitle,
  language,
  valutation,
  overview,
}) {
  const fullStars = Math.ceil(valutation / 2);
  const starIcon = [...Array(fullStars)].map((star, i) => (
    <FontAwesomeIcon icon={faStar} key={i} className="star-yellow" />
  ));

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
          <span className="fw-bolder">Rating: </span> <span>{starIcon}</span>
        </div>
        <div className="mt-1">
          <span className="fw-bolder">Overview: </span> <span>{overview}</span>
        </div>
      </div>
    </div>
  );
}
