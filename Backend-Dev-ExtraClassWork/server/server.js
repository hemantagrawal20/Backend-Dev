const http = require('http');

const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.end("hello world from hp");
    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, {'Content-Type': 'plain/text'});
    res.write("<h1>hello world</h1>");
    res.end();
})

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});