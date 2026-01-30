// middleware.js
import fs from "fs";

const logfun = (req, res, next) => {
  const logText = `timestamp: ${new Date().toString()} | url: ${req.url} | method: ${req.method}\n`;

  fs.appendFile("./log.txt", logText, (err) => {
    if (err) {
      console.error("Logging error:", err);
    }
  });

  console.log(logText);
  next();
};

export default logfun;
