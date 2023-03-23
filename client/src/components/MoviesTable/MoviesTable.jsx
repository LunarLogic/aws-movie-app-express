import { getMovies } from "../../api/movies";
import { Movie } from "../Movie/Movie";
import { useEffect, useState, useMemo } from "react";

export const MoviesTable = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  console.log(movies);
  return movies.length ? (
    movies.map((movie) => (
      <Movie key={movie.id} title={movie.title} rating={movie.rating} />
    ))
  ) : (
    <div>Loading</div>
  );
};
