//json bhejna routing with multiple routes

const http = require('http');

let user = {
    username: "yash",
    password: "1234"
};

const server = http.createServer((req, res) => {

    // HOME ROUTE
    if (req.url === "/home" && req.method === "GET") {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            success: true,
            message: "Welcome to Home Page",
            user: user
        }));
    } 
    
    // ABOUT ROUTE
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            success: true,
            message: "This is About Page"
        }));
    } 

    // 404 ROUTE
    else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            success: false,
            message: "Page not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});