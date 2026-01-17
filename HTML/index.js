let index = async () => {

  let students = await getStudents();
  let colleges = await getColleges();

  console.log(students.length);

  let studentsBox = document.getElementById("students");
  let collegesBox = document.getElementById("colleges");

  studentsBox.innerHTML = `<h1>Total Students ${students.length}</h1>`;
  collegesBox.innerHTML = `<h1>Total Colleges ${colleges.length}</h1>`;
};

index();
