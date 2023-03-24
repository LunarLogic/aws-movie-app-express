import { apiClient } from "./apiClient";

export const getMovies = async () => {
  return await apiClient
    .get("/movies")
    .then((response) => response.data.data)
    .catch((e) => console.log(e));
};

export const addMovie = async (title, rating) => {
  return await apiClient
    .post("/movies", { title, rating })
    .then((response) => response.data.data)
    .catch((e) => console.log(e));
};
