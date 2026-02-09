import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const images = ["img1.jpg", "img2.jpg"];
  res.render("gallery", { images });
});

export default router;