const http = require('http');
const url = require('url');

// Route handlers
const routes = {
  '/': {
    GET: (query, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the HTTP Server!');
    }
  },
  '/about': {
    GET: (query, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>About Page</h1><p>This is a simple HTTP server built with Node.js</p>');
    }
  },
  '/user': {
    GET: (query, res) => {
      const { name, age } = query;

      // Validate parameters
      if (!name || !age) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Please provide both name and age query parameters' }));
        return;
      }

      // Validate age is a number
      const ageNum = parseInt(age);
      if (isNaN(ageNum)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Age must be a valid number' }));
        return;
      }

      const userData = { name, age: ageNum };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userData));
    }
  }
};

// Handle 404
const notFound = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 Page Not Found</h1><p>The page you are looking for does not exist.</p>');
};

const server = http.createServer((req, res) => {
  // Only handle GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Route to handler or 404
  if (routes[pathname] && routes[pathname][req.method]) {
    routes[pathname][req.method](query, res);
  } else {
    notFound(res);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  GET / - Welcome message');
  console.log('  GET /about - About page');
  console.log('  GET /user?name=<name>&age=<age> - User information');
});
