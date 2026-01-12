// Import os module
const os = require('os');

// System architecture
console.log("Architecture:", os.arch());

// Platform (windows, linux, mac)
console.log("Platform:", os.platform());

// CPU information
console.log("CPU Info:", os.cpus());

// Total memory
console.log("Total Memory:", os.totalmem());

// Free memory
console.log("Free Memory:", os.freemem());

// Home directory
console.log("Home Directory:", os.homedir());

// Hostname
console.log("Hostname:", os.hostname());

// System uptime (in seconds)
console.log("Uptime:", os.uptime());

// Temporary directory
console.log("Temp Directory:", os.tmpdir());

// User info
console.log("User Info:", os.userInfo());
