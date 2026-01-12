// fs module
const fs = require('fs');
const path = require('path');
const http = require('http');

// =====================
// FS MODULE
// =====================

// Read file asynchronously
fs.readFile('./fs/log.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Async Read:\n", data);
});

console.log("first");

// Read file synchronously
const syncData = fs.readFileSync('./fs/log.txt', 'utf8');
console.log("Sync Read:\n", syncData);

// Write file asynchronously
const writeData = "this is new data";

fs.writeFile('./fs/output.txt', writeData, (err) => {
    if (err) throw err;
    console.log("File written successfully (async)");
});

// Write file synchronously
fs.writeFileSync('./fs/output.txt', writeData);
console.log("File written successfully (sync)");

// Append file asynchronously
const appendData = "\nthis is appended data";

fs.appendFile('./fs/log.txt', appendData, (err) => {
    if (err) throw err;
    console.log("File appended successfully (async)");
});

// Append file synchronously
fs.appendFileSync('./fs/output.txt', appendData);
console.log("File appended successfully (sync)");

// Delete file
fs.unlinkSync('./fs/output.txt');
console.log("File deleted successfully");


// =====================
// PATH MODULE
// =====================

const absolutePath = path.resolve('fs/log.txt');
console.log("Absolute path:", absolutePath);

console.log("__dirname:", __dirname);

console.log("Basename:", path.basename('./fs/log.txt'));

const joinPath = path.join(__dirname, 'fs', 'log.txt');
console.log("Joined Path:", joinPath);

const parsedPath = path.parse(joinPath);
console.log("Parsed Path:", parsedPath);

const filePath = path.join(__dirname, 'fs', 'log.txt');
const fileData = fs.readFileSync(filePath, 'utf8');
console.log("File content using path:", fileData);


// =====================
// HTTP MODULE
// =====================

const server = http.createServer((req, res) => {
    console.log("URL:", req.url);
    console.log("Method:", req.method);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Hello world from HTTP server</h1>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
