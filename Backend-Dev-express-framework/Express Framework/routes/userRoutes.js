import express from "express";
const router = express.Router();

const users = [
  { id: 1, name: "Seema" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Rahul" },
  { id: 4, name: "Sneha" }
];

router.get("/", (req, res) => {
  const { name } = req.query;

  let filteredUsers = users;
  if (name) {
    filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.render("users", { users: filteredUsers });
});

export default router;