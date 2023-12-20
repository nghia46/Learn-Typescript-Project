import Student from "./models/Student.js";
const student = new Student("Nghia",22,4.7);
document.getElementById("output")!.innerHTML = `<h1>${student.toString()}</h1>`;