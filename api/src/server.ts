import router from "./routes/movie-router";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", router);

export default app;
