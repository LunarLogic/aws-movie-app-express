import "./Movie.scss";

export const Movie = ({ title, rating, onDelete }) => {
  return (
    <div className="movie-row">
      <div className="title">{title}</div>
      <div className="rating">{`${rating}/5`}</div>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
