const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total Memory", os.totalmem()/ 1024 / 1024 / 1024);
console.log("Os version", os.version());
console.log("cpuprocessor", os.cpus());
//1kb  - > 1024 bytes ->  1mb -> 1024 kb --> 1024mb -> 1gb 