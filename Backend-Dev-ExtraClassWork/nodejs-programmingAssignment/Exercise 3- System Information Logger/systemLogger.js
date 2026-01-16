const os = require("os");
const fs = require("fs");

setInterval(() => {
  const info = `
Time: ${new Date().toLocaleString()}
CPU: ${os.cpus()[0].model}
Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Platform: ${os.platform()}
-------------------------
`;

  fs.appendFile("systemInfo.txt", info, (err) => {
    if (err) console.log("Error:", err);
  });

}, 5000);
