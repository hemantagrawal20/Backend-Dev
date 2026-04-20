const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../log.txt");

const logger = (req, res, next) => {
    const log = `${req.method} ${req.url} - ${new Date().toISOString()}\n`;

    console.log(log.trim());

    fs.appendFile(logFile, log, (err) => {
        if (err) console.error(err);
    });

    next();
};

module.exports = logger;