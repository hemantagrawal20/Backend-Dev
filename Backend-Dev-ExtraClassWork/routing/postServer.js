const http = require('http');
const querystring = require('querystring');

const port=3000;

const server = http.createServer((req, res) => {
    if(req.url==='/login' && req.method==='POST'){
        let data=' ';

        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            console.log("your data is urlencoded format:"+ data);
            let parsedData = querystring.parse(data);
            console.log("passed row to js object", parsedData);
            
            let jsonString = JSON.stringify(parsedData);
            console.log("converted js object to json string"+ jsonString);


            let final=JSON.parse(jsonString);
            console.log("converted json string to json data", final);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end("data received:",jsonString);
        });

        return;
    }
    res.end("server is running");
})

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
