//List of Students
const studentArray = [
  "Ainsley A",
  "Alex B",
  "Liam B",
  "Addison E",
  "Spike F",
  "Deziree L",
];

//Shuffling Algorithm
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffle(studentArray); // Shuffle our student Array

const student = document.getElementById("student");
const btn = document.getElementById("btn");
let studentIndex = 0;
console.log(studentArray);

btn.addEventListener("click", () => {
  if (studentArray.length === 0) {
    // alert("too");
    student.innerHTML = "All Done!";
  } else {
    student.innerHTML = studentArray[0];
    studentArray.shift();
    console.log(studentArray);
  }
});
