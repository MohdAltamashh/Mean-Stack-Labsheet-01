const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "sample.txt");
console.log("1. readFileSync:", fs.readFileSync(file, "utf8"));
fs.readFile(file, "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log("2. callback readFile:", data);
});
async function readAsync() {
  try { console.log("3. promises/await:", await fs.promises.readFile(file, "utf8")); }
  catch (error) { console.error(error); }
}
readAsync();
console.log("4. This line can run before asynchronous reads finish.");
