//callback hell - multiple nested callbacks leading to hard-to-read code
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback('Sample Data');
    }, 1000);   
}

function processData(data, callback) {
    setTimeout(() => {
        console.log('Data processed: ' + data);
        callback('Processed ' + data);
    }, 1000);
}
function displayData(data, callback) {
    setTimeout(() => {
        console.log('Data displayed: ' + data);
        callback();
    }, 1000);
}
fetchData(function(data) {
    processData(data, function(processedData) {
        displayData(processedData, function() { 
            console.log('All operations completed');
        }
        );
    });
});
// Output:
// Data fetched
// Data processed: Sample Data
// Data displayed: Processed Sample Data
// All operations completed