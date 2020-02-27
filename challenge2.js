//Prompt the user asking for their name
let userName = prompt("What's your name?");
//Alert the user if they do not enter anything
if (userName == ""){
    alert("No idea who you are, pal...");
} else {
    //Alert the user the following if they do enter somthing: Hello there [NAME]
    alert(`Hello there, ${userName}`);
}