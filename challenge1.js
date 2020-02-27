//Create 3 objects with the following properties: name,address,city,state,and zipCode
let person1 = {
    name: 'Brandon',
    address: '1234 Twilight Road',
    city: 'Memphis',
    state: 'TN',
    zipCode: 38111
};
let person2 = {
    name: 'Brianna',
    address: '2345 Stardust Lane',
    city: 'Memphis',
    state: 'TN',
    zipCode: 38112
};
let person3 = {
    name: 'Seth',
    address: '3456 Meteor Avenue',
    city: 'Nashville',
    state: 'TN',
    zipCode: '37111'
};
//Create a function called printLabel() that will print the properties as followed:
// Kevin Yancy
// 1234 some street
// Cordova, TN 38016
//*The function should not do the printing, just the template
function printLabel(person) {
    let label = ` ${person.name}
 ${person.address}
 ${person.city}, ${person.state} ${person.zipCode}`;
    return label;
}
//Print the labels using the function
console.log(printLabel(person1));
console.log(printLabel(person2));
console.log(printLabel(person3));
