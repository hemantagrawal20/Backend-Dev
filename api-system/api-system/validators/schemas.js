// validators/schemas.js — Joi schemas + validation middleware

const Joi = require("joi");

// ── Schemas ───────────────────────────────────────────
const listSchema = Joi.object({
  resource: Joi.string().valid("posts", "users").default("posts"),
  page:     Joi.number().integer().min(1).default(1),
  limit:    Joi.number().integer().min(1).max(100).default(10),
  sort:     Joi.string().valid("asc", "desc").default("asc"),
});

const searchSchema = Joi.object({
  resource: Joi.string().valid("posts", "users").default("posts"),
  q:        Joi.string().min(1).max(100).required(),
  field:    Joi.string().optional(),
  page:     Joi.number().integer().min(1).default(1),
  limit:    Joi.number().integer().min(1).max(100).default(10),
});

// ── Middleware factory ────────────────────────────────
function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        success: false,
        error:   "Validation Failed",
        details: error.details.map((d) => ({
          field:   d.path.join("."),
          message: d.message,
        })),
      });
    }

    req.query = value; // coerced + defaulted values
    next();
  };
}

module.exports = { listSchema, searchSchema, validate };
