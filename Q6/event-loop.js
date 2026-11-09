console.log("1. synchronous start");
setTimeout(() => console.log("5. setTimeout"), 0);
setImmediate(() => console.log("6. setImmediate (relative order may vary by context)"));
Promise.resolve().then(() => console.log("4. Promise.then"));
process.nextTick(() => console.log("3. process.nextTick"));
console.log("2. synchronous end");

console.log("PID:", process.pid);
console.log("Platform:", process.platform);
console.log("Arguments:", process.argv);
console.log("Memory usage:", process.memoryUsage());
