//html bhejna with routing
const http = require('http');

const server = http.createServer((req, res) => {

    // HOME PAGE
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>Home Page</h1>
                    <p>Welcome to the Home page</p>
                </body>
            </html>
        `);
    }

    // ABOUT PAGE
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>About Page</h1>
                    <p>This is the About page</p>
                </body>
            </html>
        `);
    }

    // CONTACT PAGE
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>Contact Page</h1>
                    <p>This is the Contact page</p>
                </body>
            </html>
        `);
    }

    // 404 PAGE
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>404 - Page Not Found</h1>
                </body>
            </html>
        `);
    }

    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
