function createStudent(name, grade, gpa) {
    const student = {
        name: name,
        grade: grade,
        gpa: gpa,
        isHonors: false
    }
    if (gpa >= 3.5){
        student.isHonors = true
    }
    return (student)
  }


console.log(createStudent("Alex", 11, 3.7));
