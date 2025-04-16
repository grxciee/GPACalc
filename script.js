// GPA grade point mapping
const gradePoints = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0
};

// Handle GPA calculation
document.getElementById('calculate-gpa').addEventListener('click', function () {
  const courseRows = document.querySelectorAll('#courses-container .course-row');
  let totalPoints = 0;
  let validCourses = 0;

  for (let row of courseRows) {
    const gradeSelect = row.querySelector('select');
    const grade = gradeSelect.value.trim();

    if (grade === "") {
      alert("Please select a grade for all courses.");
      return;
    }

    totalPoints += gradePoints[grade];
    validCourses++;
  }

  if (validCourses === 0) {
    document.getElementById('gpa-result').textContent = "No grades entered.";
    return;
  }

  const gpa = (totalPoints / validCourses).toFixed(2);
  document.getElementById('gpa-result').textContent = `Estimated GPA: ${gpa}`;
});

// Handle dynamic row addition
document.getElementById('add-course').addEventListener('click', function () {
  const container = document.getElementById('courses-container');

  const newRow = document.createElement('div');
  newRow.classList.add('course-row');

  newRow.innerHTML = `
    <input type="text" placeholder="Course Name" required>
    <select required>
      <option value="">Select Grade</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  `;

  container.appendChild(newRow);
});
