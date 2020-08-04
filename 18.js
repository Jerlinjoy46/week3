const prompt = require("prompt-sync")();

console.log("Enter the marks scored by the students");
var written_test = prompt("Written test = ");
var lab_exams = prompt("Lab exam = ");
var assignments = prompt("Assignments = ");

var grade = (written_test * 70)/100 + (lab_exams*20)/100 + (assignments*10)/100;
console.log("Grade of the student is ", grade);