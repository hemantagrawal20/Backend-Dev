const fs=require('fs');
const {Transform}=require('stream');

const upper=new Transform({
    transform(chunk,encoding,callback){
        //removing vowels and replacing with '*'
        const modifiedData=chunk.toString().replace(/[aeiouAEIOU]/g,'*');
        callback(null,modifiedData);
    }
});

const readStream=fs.createReadStream('./string/task2/log.txt');
const writeStream=fs.createWriteStream('./string/task2/Output.txt');

readStream
    .pipe(upper)
    .pipe(writeStream);
