const course = "MCA";
let marks = 82;
const greet = (name = "Student") => `Hello ${name}`;
const student = { name: "Altamash", city: "Saharanpur" };
const { name, city } = student;
const numbers = [10, 20, 30];
const [first, second] = numbers;
const moreNumbers = [...numbers, 40, 50];
function total(...values) { return values.reduce((sum, value) => sum + value, 0); }
console.log("let/const:", course, marks);
console.log("Arrow function:", greet("Altamash"));
console.log("Template literal:", `${name} studies ${course}`);
console.log("Object destructuring:", name, city);
console.log("Array destructuring:", first, second);
console.log("Spread:", moreNumbers);
console.log("Rest:", total(1, 2, 3, 4));
console.log("Default parameter:", greet());
