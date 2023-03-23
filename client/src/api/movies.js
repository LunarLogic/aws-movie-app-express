import { apiClient } from "./apiClient";

export const getMovies = async () => {
  return await apiClient
    .get("/movies")
    .then((response) => response.data.data)
    .catch((e) => console.log(e));
};
