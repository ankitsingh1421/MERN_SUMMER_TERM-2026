
const students = [
  { id: 1, name: "Aman", marks: 85, attendance: 92 },
  { id: 2, name: "Riya", marks: 38, attendance: 76 },
  { id: 3, name: "Karan", marks: 67, attendance: 81 },
  { id: 4, name: "Ankit", marks: 91, attendance: 88 },
  { id: 5, name: "Raj", marks: 45, attendance: 60 },
  { id: 6, name: "Neha", marks: 29, attendance: 95 },
];

const passedStudents = students.filter((std) => std.marks >= 40);

const studentReport = students.map((std) => {
  let grade;

  if (std.marks >= 80) grade = "A";
  else if (std.marks >= 60) grade = "B";
  else if (std.marks >= 40) grade = "C";
  else grade = "F";

  return {
    ...std,
    grade,
  };
});

const totalMarks = students.reduce((sum, std) => sum + std.marks, 0);

const averageMarks = (totalMarks / students.length).toFixed(2);

const topper = students.reduce((highest, student) =>
  student.marks > highest.marks ? student : highest,
);

console.log("STUDENT PERFORMANCE ANALYZER ---------->\n");

console.log("Passed Students:");
passedStudents.forEach((std) => {
  console.log(`- ${std.name} (${std.marks} marks)`);
});

console.log("\nStudent Report:");
studentReport.forEach((std) => {
  console.log(
    `Name: ${std.name} | Marks: ${std.marks} | Attendance: ${std.attendance}% | Grade: ${std.grade}`,
  );
});

console.log(`\nClass Average Marks: ${averageMarks}`);
console.log(`Topper: ${topper.name} (${topper.marks} marks)`);