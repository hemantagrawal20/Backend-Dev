// middleware/logger.js — Request/Response logging middleware

function logger(req, res, next) {
  const start = Date.now();
  const time  = new Date().toISOString();

  console.log(`[${time}] --> ${req.method} ${req.path} | Query: ${JSON.stringify(req.query)}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] <-- ${req.method} ${req.path} | Status: ${res.statusCode} | ${duration}ms`
    );
  });

  next();
}

module.exports = logger;
