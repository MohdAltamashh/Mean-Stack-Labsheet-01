class Student {
  constructor(name, marks) { this.name = name; this.marks = marks; }
  display() { return `${this.name}: ${this.marks}`; }
}
class GradStudent extends Student {
  constructor(name, marks, specialization) {
    super(name, marks);
    this.specialization = specialization;
  }
  display() { return `${super.display()} | Specialization: ${this.specialization}`; }
}
const students = [
  new Student("Aarav", 75), new Student("Sara", 58),
  new Student("Rohan", 91), new GradStudent("Altamash", 84, "Web Development"),
  new Student("Ananya", 49)
];
console.log("All students:");
students.forEach(s => console.log(s.display()));
console.log("Students scoring above 60:");
students.filter(s => s.marks > 60).map(s => s.name).forEach(console.log);
