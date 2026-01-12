//declared function
// function demo(){
//     console.log("demo function");
// }

exports.fun=function(){
    console.log("function expression");
}   

exports.serve=()=>{
    console.log("arrow function");
}

module.exports.fun;
module.exports.serve;