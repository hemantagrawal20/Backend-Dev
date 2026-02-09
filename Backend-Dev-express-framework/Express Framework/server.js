import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import homeRoute from "./routes/homeRoute.js";
import responseTime from "./middleware/responseTime.js";

const app = express();
const port=process.env.PORT || 5000;
// global middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(responseTime);

// view engine
app.set("view engine", "ejs");

// routes
app.use("/", homeRoute);
app.use("/users", userRoutes);
app.use("/contact", contactRoutes);
app.use("/gallery", galleryRoutes);
app.use("/blog", blogRoutes);

// 404 page (always last)
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server running on port https://localhost:${port}`);
});