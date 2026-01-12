// Import path module
const path = require('path');

// Current directory
console.log("Directory name:", __dirname);

// Absolute path of a file
const absolutePath = path.resolve('fs/log.txt');
console.log("Absolute Path:", absolutePath);

// Join paths safely
const joinedPath = path.join(__dirname, 'fs', 'log.txt');
console.log("Joined Path:", joinedPath);

// Get file name from path
console.log("Basename:", path.basename(joinedPath));

// Get extension name
console.log("Extension:", path.extname(joinedPath));

// Parse path into object
const parsedPath = path.parse(joinedPath);
console.log("Parsed Path:", parsedPath);
