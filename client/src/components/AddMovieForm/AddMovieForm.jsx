import { useState } from "react";

export const AddMovieForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(title, Number(rating));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Rating
          <input
            name="rating"
            type="text"
            value={rating}
            onChange={handleRatingChange}
          ></input>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
