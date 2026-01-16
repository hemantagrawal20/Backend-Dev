//async await = syntactic sugar for promises

function resolveAfter2Seconds() {   
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();
//adding one more function to demonstrate error handling with try-catch
function rejectAfter2Seconds() {   
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('rejected');
        }, 2000);
    });
}
async function asyncCallWithErrorHandling() {
    console.log('calling');
    try {
        const result = await rejectAfter2Seconds();
        console.log(result);
    } catch (error) {
        console.log('Error: ' + error);
    }
}
asyncCallWithErrorHandling();

// Output:
// calling
// (after 2 seconds)
// resolved

// calling
// (after 2 seconds)
// Error: rejected  
