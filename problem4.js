const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

function printRoster(students) {
  // TODO: loop through students with .forEach()
  // TODO: print each student in the format above

  students.forEach((student) => {
    console.log(student.name + " is in grade " + student.grade + " with a " + student.gpa + " GPA. ");
  });
}

printRoster(students)