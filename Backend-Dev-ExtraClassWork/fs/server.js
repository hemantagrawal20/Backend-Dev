// //fs module

// //imorting fs module
// const fs = require('fs');

// // const read=(err, data)=>{
// //     if (err) throw err
// //     console.log(data)
// // }

// // fs.readFile('./fs/log.txt', 'utf8', read);

// console.log("first");

// //read file asynchronously
// // fs.readFile('./fs/log.txt', 'utf8', (err, data)=>{
// //     if (err) throw err
// //     console.log(data)
// // });

// //read file synchronously
// // const data=fs.readFileSync('./fs/log.txt', 'utf8')
// // console.log(data)

// //write file asynchronously
// const data="this is new data"

// // fs.writeFile('./fs/output.txt', data, (err)=>{
// //     if (err) throw err
// //     console.log("file written successfully")
// // });

// //write file synchronously
// // fs.writeFileSync('./fs/output.txt', data)
// // console.log("file written successfully")

// console.log("end");

// //append file asynchronously
// // const appendData="\nthis is appended data"
// // fs.appendFile('./fs/log.txt', appendData, (err)=>{
// //     if (err) throw err
// //     console.log("file appended successfully")
// // });

// //append file synchronously
// // fs.appendFileSync('./fs/output.txt', appendData)
// // console.log("file appended successfully")

// //delete file
// fs.unlinkSync('./fs/output.txt')
// console.log("file deleted successfully")


// //path module

// //importing path module
// const path = require('path');


// //absolute path
// const absolutePath=path.resolve('fs/log.txt');

// console.log(absolutePath);
// console.log(__dirname);
// console.log(path.basename('./fs/log.txt')); //filename


// const joinPath=path.join(__dirname, 'fs', 'log.txt');
// console.log(joinPath);


// const pathParsed=path.parse(joinPath);
// console.log(pathParsed);

// const filePath=path.join(__dirname, 'fs', 'log.txt');
// const data=fs.readFileSync(filePath, 'utf8');
// console.log(data)


//http methods
//get = read
//post = create
//put = update
//delete = delete 
//patch = partial update 


//api - application programming interface 

//rest api - representational state transfer api (type of api to communicate between client and server using http methods)


// //http module

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