import axios from "axios";

const apiUrl = "http://aws-movie-app-express.lunarlogic.io/api";

export const apiClient = axios.create({
  baseURL: apiUrl,
});
