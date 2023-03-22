import { Router } from "express";
import { body } from "express-validator";
import {
  addMovie,
  deleteMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie-controller";

const router = Router();

router.post("/movies", addMovie);
router.get("/movies", getMovies);
router.put(
  "/movies/:id",
  [body("title").optional(), body("rating").optional()],
  updateMovie
);
router.delete("/movies/:id", deleteMovie);

export default router;
