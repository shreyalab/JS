//Variables are use to store the data temporarily in computers memory
// are case sensitive
//cannot be reserved keyword
//should be meaningful
//cannot contain space or hyphen
//cannot start with a number

let name='Shreya';
console.log(name);

const interestRate=5;
//interestRate=10;
console.log(interestRate);

//Primitive or value types
let firstName='Shreya';// String
let age='24';// Number
let isApproved='true'// Boolean(true or false)
let lastName= undefined;// Undefined
let selectedCourse= null;// Null is used when we change the value

//languages are of two types
//1. Static language- when we declare a variable tht type of variable is set and cannot be changed
//2.Dynamic language - JS is a dynamic language and the type of variable can change at runtime

// Reference types
//1.Object
//2.Array
//3.Function

//object

let person={
    firstName:'Shreya',
    lastName:'Bashetty',
    age:24

};
console.log(person);

person.lastName='Nagthane';
console.log(person.lastName);

// Arrays - array is an object in js
// it is a structure to represent list of items

let selectedSubjects = ['English','Kannada'];
console.log (selectedSubjects);
console.log(selectedSubjects[1]);
console.log(selectedSubjects.length);

// Functions - these are building block in js
// functions are set statements that performs a task

function greet(){
    console.log('Hello World');
}
greet();

function welcome(name, lastName){
console.log('Hello' + ' '+ name +' ' +lastName);
}
welcome('Shreya','Bashetty');

//Calculating a square
function square(number){
    return number*number;
    
}
console.log(square(2));



var y= 10