const http=require('http');

// const server=http.createServer((req,res)=>{
//     console.log("url",req.url);
//     console.log("http method",req.method);

//     res.writeHead(200,{'Content-Type':'text/html'});

//     res.end("hello");
// })

const server=http.createServer((req,res)=>{
    let user={
        username:"yash",
        password:"1234"
    }
    res.writeHead(200,{
        'Content-Type':'application/json'
    });
    res.end(JSON.stringify({
        success:true,
        user,
    }  
));
});
server.listen(3000,()=>{
    console.log("server is listening on port 3000");
})