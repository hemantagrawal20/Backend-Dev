import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Contact form submitted");
});

export default router;