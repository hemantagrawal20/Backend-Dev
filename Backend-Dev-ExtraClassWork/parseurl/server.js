const http=require('http');

const server=http.createServer((req,res)=>{

    const baseUrl="http://localhost:3000";
    const parsedUrl=new URL(req.url,baseUrl);

    // const path=parsedUrl.pathname;
    // const hostname=parsedUrl.hostname;

    const {path,hostname}=parsedUrl;
    //console.log(parsedUrl);

    res.end('server running successfully');

});

server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});