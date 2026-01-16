const {add,sub,mul}=require('./calculator');
let sum=add(10,20);
let difference=sub(30,15);
let product=mul(5,6);
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
 
//os http module

const os=require('os');
console.log(os.arch());
console.log(os.freemem()/(1024**3));
console.log("total meory",os.totalmem()/(1024**3));
console.log(os.uptime());
