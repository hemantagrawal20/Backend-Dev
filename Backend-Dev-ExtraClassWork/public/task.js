const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    // Route: /
    if (path === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Node.js HTTP Server');
    }

    // Route: /about
    else if (path === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>About Page</h1>
            <p>This is a simple Node.js HTTP server</p>
        `);
    }

    // Route: /user
    else if (path === '/user' && req.method === 'GET') {
        const { name, age } = parsedUrl.query;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            name: name,
            age: age
        }));
    }

    // Invalid route
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
