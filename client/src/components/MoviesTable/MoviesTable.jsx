import { addMovie, deleteMovie, getMovies } from "../../api/movies";
import { Movie } from "../Movie/Movie";
import { useEffect, useState } from "react";
import { AddMovieForm } from "../AddMovieForm/AddMovieForm";

export const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  };

  const handleAddMovie = async (title, rating) => {
    await addMovie(title, rating);
    await fetchMovies();
  };

  const handleDeleteMovie = async (id) => {
    await deleteMovie(id);
    await fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      {movies.length ? (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            onDelete={() => handleDeleteMovie(movie.id)}
          />
        ))
      ) : (
        <div>No movies yet</div>
      )}
      <button onClick={() => setShowForm(!showForm)}>Add movie</button>
      {showForm && <AddMovieForm onSubmit={handleAddMovie} />}
    </div>
  );
};
