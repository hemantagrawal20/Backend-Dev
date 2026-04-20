// server.js — Entry point

const express             = require("express");
const logger              = require("./middleware/logger");
const routes              = require("./routes/index");
const { fetchExternalData } = require("./store");

const app  = express();
const PORT = 3000;

// ── Middleware ────────────────────────────────────────
app.use(express.json());
app.use(logger);           // custom logging middleware

// ── Routes ────────────────────────────────────────────
app.use("/", routes);

// ── 404 Handler ───────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error:   `Route '${req.method} ${req.path}' not found`,
    available: [
      "GET /list?resource=posts|users&page=1&limit=10&sort=asc|desc",
      "GET /search?resource=posts|users&q=<term>&field=<optional>&page=1&limit=10",
    ],
  });
});

// ── Global Error Handler ──────────────────────────────
app.use((err, req, res, next) => {
  console.error("[ERROR]", err.message);
  res.status(500).json({
    success: false,
    error:   "Internal Server Error",
    detail:  err.message,
  });
});

// ── Boot ──────────────────────────────────────────────
fetchExternalData()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\n🚀  Server running → http://localhost:${PORT}`);
      console.log(`   GET  /list`);
      console.log(`   GET  /search\n`);
    });
  })
  .catch((err) => {
    console.error("[BOOT ERROR]", err.message);
    process.exit(1);
  });
