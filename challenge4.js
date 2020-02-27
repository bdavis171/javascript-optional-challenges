//Create the variables needed
let userName = '';
let description = '';
let steps = '';
let userConfirm = false;
//Create a loop to collect the user's info
while (userConfirm == false){
    userName = prompt('Enter your name:');
    description = prompt('Describe your issue:');
    steps = prompt('Enter the steps you took to resolve the issue:');
    //alert the user to fill a fields if any are empty
    if (userName == "" || description == '' || steps == ''){
        alert('All fields must be filled!!!!');
        continue;
    } else {
        //alert the user what they entered and confirm if it is correct
        let confirmMessage = `Name:\n${userName}\n\nDescription:\n${description}\n\nSteps to Resolve:\n${steps}`;
        userConfirm = confirm(confirmMessage);
        //Repeat loop if the user hits cancel
        if (userConfirm == false){
            continue;
        }
    }
}