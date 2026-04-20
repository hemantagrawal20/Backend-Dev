// routes/index.js — /list and /search route handlers

const express  = require("express");
const { store } = require("../store");
const { listSchema, searchSchema, validate } = require("../validators/schemas");

const router = express.Router();

// ── GET /list ─────────────────────────────────────────
// Query params: resource, page, limit, sort
router.get("/list", validate(listSchema), (req, res) => {
  const { resource, page, limit, sort } = req.query;

  const data = store[resource];
  if (!data || data.length === 0) {
    return res.status(404).json({
      success: false,
      error: `No data available for resource '${resource}'`,
    });
  }

  // Sort by id
  const sorted = [...data].sort((a, b) =>
    sort === "asc" ? a.id - b.id : b.id - a.id
  );

  const start = (page - 1) * limit;
  const slice = sorted.slice(start, start + limit);

  res.json({
    success:  true,
    resource,
    meta: {
      total:      data.length,
      page,
      limit,
      totalPages: Math.ceil(data.length / limit),
      sort,
    },
    data: slice,
  });
});

// ── GET /search ───────────────────────────────────────
// Query params: resource, q (required), field (optional), page, limit
router.get("/search", validate(searchSchema), (req, res) => {
  const { resource, q, field, page, limit } = req.query;

  const data = store[resource];
  if (!data || data.length === 0) {
    return res.status(404).json({
      success: false,
      error: `No data available for resource '${resource}'`,
    });
  }

  const query = q.toLowerCase();

  const results = data.filter((item) => {
    if (field) {
      // Search specific field only
      if (item[field] === undefined) return false;
      return String(item[field]).toLowerCase().includes(query);
    }
    // Search all primitive fields
    return Object.values(item).some((v) =>
      typeof v === "string" || typeof v === "number"
        ? String(v).toLowerCase().includes(query)
        : false
    );
  });

  const start = (page - 1) * limit;
  const slice = results.slice(start, start + limit);

  res.json({
    success:  true,
    resource,
    query:    q,
    field:    field || "all fields",
    meta: {
      total:      results.length,
      page,
      limit,
      totalPages: Math.ceil(results.length / limit),
    },
    data: slice,
  });
});

module.exports = router;
