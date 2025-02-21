//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

// Exercise
function getAverageGrade(student, course){
  let sum = 0;
  let average = 0;
  let count = 0;

  for(let i = 0; i < students.length; i++){
    if(students[i].fname === student){
      for(let c = 0; c < students[i].transcript.length; c++){
        if(students[i].transcript[c].course === course){
          for(let j = 0; j < students[i].transcript[c].grades.length; j++){
            sum = sum + students[i].transcript[c].grades[j];
            count++;
          }
        } else{
          return -1;
        }
      }
    }
  }

  average = sum / count;
  return average;
}

// Test
console.log(getAverageGrade('sally', 'INFO 1603'));

function getAssignmentMark(student, course, num){
  let grade;

  for(let i = 0; i < students.length; i++){
    if(students[i].fname === student){
      for(let c = 0; c < students[i].transcript.length; c++){
        if(students[i].transcript[c].course === course){
          grade = students[i].transcript[c].grades[num];
          return grade;
        } else{
          return -1;
        }
      }
    } 
  }
}

// Test
console.log(getAssignmentMark('sally', 'INFO 1601', 1));

function averageAssessment(students, courseName, assignment){
  let sum = 0;
  let average = 0;
  let count = 0;

  for(let i = 0; i < students.length; i++){
    for(let c = 0; c < students[i].transcript.length; c++){
      if(students[i].transcript[c].course === courseName){
        for(let j = 0; j < students[i].transcript[c].grades.length; j++){
          if(j === assignment){
            sum = sum + students[i].transcript[c].grades[j];
            count++;
          }          
        }
      }
    }
  }

  average = sum/count;
  return average;
}

// Test
console.log(averageAssessment(students, 'INFO 1601', 1));