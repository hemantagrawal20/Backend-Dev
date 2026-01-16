const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    let filePath = '';

    if (req.url === '/' || req.url === '/index') {
        filePath = path.join(__dirname, 'public', 'index.html');
    } 
    else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
    } 
    else if (req.url === '/task') {
        filePath = path.join(__dirname, 'public', 'task.html');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Page Not Found');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Internal Server Error');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});