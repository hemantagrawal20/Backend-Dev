//callback - fn passed to another function to be executed later
function greet(name) {
    console.log('Hello ' + name);
}
function processUserInput(callback) {
    var name = 'John Doe';
    callback(name);
}
processUserInput(greet);
// Output: Hello John Doe
// Example with anonymous function as callback
processUserInput(function(name) {
    console.log('Hi ' + name);
});
// Output: Hi John Doe
// Example with arrow function as callback
processUserInput((name) => {
    console.log('Welcome ' + name);
});
// Output: Welcome John Doe
