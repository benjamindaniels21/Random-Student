//List of Students
let studentArray;

const firstPeriod = [
  "Ainsley A",
  "Alex B",
  "Liam B",
  "Addison E",
  "Spike F",
  "Deziree L",
  "Link M",
  "Milla M",
  "Joey M",
  "Rider T",
  "Nick S.",
];

const secondPeriod = [
  "Dalilah A",
  "Julia B",
  "Morrigan B",
  "Enrico D",
  "Jayden F",
  "Damien F",
  "Triniti H",
  "Ryan K",
  "Aiden L",
  "Mason L",
  "Akira M",
  "Isabella P",
  "Allison W",
  "Angelina W",
];

const thirdPeriod = [
  "James C",
  "Keaton D",
  "Adriana D",
  "Robert F",
  "Diego F",
  "Camryn I",
  "Ian L",
  "Kevin M",
  "Rose M",
  "Triston S",
];

const fourthPeriod = [
  "Alex B",
  "Enrico D",
  "Spike F",
  "Mackenzie H",
  "Camryn I",
  "Ryan K",
  "Benet L",
  "Mason L",
  "Kellse M",
  "David M",
  "Sarah R",
  "Allison S",
  "Allison W",
  "Benett W",
];

const sixthPeriod = [
  "Aiden B",
  "Jessica C",
  "Alexandra C",
  "Caitlin D",
  "Damien F",
  "Brennen F",
  "Leeann H",
  "Carla H",
  "Jasmine H",
  "Noah H",
  "Molly K",
  "Elena L",
  "Joey M",
  "Conner M",
  "Regan N",
  "Jonathan Q",
  "William S",
  "Haley T",
  "Tori T",
  "Jackson W",
];

const seventhPeriod = [
  "Evan B",
  "Aila B",
  "Julia B",
  "Carlie C",
  "Trishann D",
  "Pierce E",
  "Chase G",
  "Cameron J",
  "Aiden L",
  "Alexa L",
  "Katherine M",
  "Kellse M",
  "Ava M",
  "Maria M",
  "Michael N",
  "Jesse R",
  "Adrielee V",
  "Madelyn W",
  "Shira W",
  "Olivia W",
];

studentArray = firstPeriod; //initialize array as period 1

// Shuffling Algorithm
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
const classDropdown = document.getElementById("period-number");

//Change the Period Number and Shuffle students
classDropdown.addEventListener("change", () => {
  // console.log(classDropdown.value);
  switch (classDropdown.value) {
    case "1st":
      studentArray = firstPeriod;
      shuffle(studentArray);
      break;
    case "2nd":
      studentArray = secondPeriod;
      shuffle(studentArray);
      break;
    case "3rd":
      studentArray = thirdPeriod;
      shuffle(studentArray);
      break;
    case "4th":
      studentArray = fourthPeriod;
      shuffle(studentArray);
      break;
    case "6nd":
      studentArray = sixthPeriod;
      shuffle(studentArray);
      break;
    case "7th":
      studentArray = seventhPeriod;
      shuffle(studentArray);
      break;
  }
});

//Display Student Name After Button Clicks
btn.addEventListener("click", () => {
  if (studentArray.length === 0) {
    student.innerHTML = "All Done!";
  } else {
    student.innerHTML = studentArray[0];
    studentArray.shift();
    console.log(studentArray);
  }
});
