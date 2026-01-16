//json bhejna routing with single route
const http = require('http');

let user = {
    username: "yash",
    password: "1234"
};

const server = http.createServer((req, res) => {

    if (req.url === "/home" && req.method === "GET") {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            success: true,
            user: user
        }));
    } else {
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
