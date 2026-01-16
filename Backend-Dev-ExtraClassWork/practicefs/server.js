//read write ap pend delete
const fs = require('fs');

//read file
//asynchronous
fs.readFile('./fs/practicefs/log.txt', 'utf8', (err, data)=>{
    if (err) throw err
    console.log(data)
});
//synchronous   
// const data = fs.readFileSync('./fs/practicefs/log.txt', 'utf8');
// console.log(data);

//write file
const data="this is log data"

//asynchronous
fs.writeFile('./fs/practicefs/log.txt', data, (err)=>{
    if (err) throw err
    console.log("file written successfully")
});

//synchronous
// fs.writeFileSync('./fs/practicefs/log.txt', data);
// console.log("file written successfully");

//append file
const newData="\n this is new log data"
//asynchronous
fs.appendFile('./fs/practicefs/log.txt', newData, (err)=>{
    if (err) throw err
    console.log("file appended successfully")
});

//synchronous
// fs.appendFileSync('./fs/practicefs/log.txt', newData);
// console.log("file appended successfully");

//delete file
//asynchronous
fs.unlink('./fs/practicefs/log.txt', (err)=>{
    if (err) throw err
    console.log("file deleted successfully")
});

//synchronous
// fs.unlinkSync('./fs/practicefs/log.txt');
// console.log("file deleted successfully");