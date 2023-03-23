import "./Movie.scss";

export const Movie = ({ title, rating }) => {
  return (
    <div className="movie-row">
      <div className="title">{title}</div>
      <div className="rating">{`${rating}/5`}</div>
    </div>
  );
};
