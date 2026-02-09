import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "First Post", content: "Hello Blog!" },
  { id: 2, title: "Second Post", content: "Learning Express" }
];

router.get("/", (req, res) => {
  res.render("blog", { posts });
});

router.get("/new", (req, res) => {
  res.render("newPost");
});

router.post("/", (req, res) => {
  const { title, content } = req.body;

  posts.push({
    id: posts.length + 1,
    title,
    content
  });

  res.redirect("/blog");
});

router.get("/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("post", { post });
});

export default router;