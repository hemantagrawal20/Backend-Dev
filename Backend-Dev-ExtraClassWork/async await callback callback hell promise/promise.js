//promise- promise is a special object in javascript that is used to handle asynchronous operations.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve('Sample Data');
        }
        , 1000);
    });
}   
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data processed: ' + data);
            resolve('Processed ' + data);
        }
        , 1000);
    });
}
function displayData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data displayed: ' + data);
            resolve();
        }
        , 1000);
    });
}
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData))
    .then(() => {
        console.log('All operations completed');
    }
    );
// Output:
// Data fetched
// Data processed: Sample Data
// Data displayed: Processed Sample Data
// All operations completed