//copying output.txt to outputCopy.txt using streams
const fs=require('fs');

const readStream=fs.createReadStream('./string/output.txt');
const writeStreamCopy=fs.createWriteStream('./string/pipedOutput.txt');
// const writeStreamCopy=fs.createWriteStream('./string/outputCopy.txt'); for non-piped version

//non-piping way

// readStream.on('data',(chunk)=>{
//     let data=chunk.toString();
//     writeStreamCopy.write(data);
// });

// readStream.on('end',()=>{
//     writeStreamCopy.end();
// });

//piping - one liner for copying
readStream.pipe(writeStreamCopy);