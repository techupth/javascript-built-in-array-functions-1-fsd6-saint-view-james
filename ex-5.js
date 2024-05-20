const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
// Start coding here
const studentsReduce =
  students.reduce(function getAverageStudentScore(acc, curr) {
    return acc + curr.score;
  }, 0) / students.length;
console.log(studentsReduce); // Output: 87.5
