const fs=require('fs');
const http=require('http');

// fs.readFile('./output.txt','utf-8',(err,data)=>{
//     console.log(data);
// });

// const readStream=fs.createReadStream('./string/output.txt',{
//     highWaterMark:64*1024, //64kb
// })

// //large file ko read = string

// readStream.on('data',(chunk)=>{ //chunk size by default 64kb
//     console.log(chunk); //buffer data
//     // console.log(chunk.toString()); //string data
// });

// readStream.on('end',()=>{
//     console.log('Finished reading file');
// });

const writeStream=fs.createWriteStream('./string/info.txt',{
    flags:'a' //append mode
});
writeStream.write('\nThis is some line');
writeStream.write('\nThis is some line');
writeStream.end('\nThis is the some line');

writeStream.end();

writeStream.on('finish',()=>{
    console.log('Finished writing file');
});

