//Create the variables needed
let grades;
let gradesList = [];
//Prompt the user to enter the grades until they enter -1
while (grades != -1) {
    grades = parseInt(prompt("Enter in the grades (Enter -1 to quit):"));
    if (grades != -1) {
        //Add each grade to the array
        gradesList.push(grades);
    }
}
//Create a function that will calculate the average grade
function calculateAverageGrade(list) {
    let averageGrade = 0;
    for (let i = 0; i < list.length; i++) {
        averageGrade = averageGrade + list[i];
    }
    return averageGrade / list.length;
}
//alert the user the average
alert(`The grade average is ${calculateAverageGrade(gradesList)}`);