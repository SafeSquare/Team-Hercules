//No 1 Q.E.D
document.querySelector(".group-name").innerHTML = "Team Hercules"
document.querySelector(".group-name").style.color = "#363062"

//No 2 Q.E.D
let teamMembers = ["aSafeSquare", "Micheal", "Rhema", "Edward", "Martha", "Victor","precious"];
console.log(teamMembers[0]);

//No 3 Q.E.D         
let teamLead = {
    firstName: "Fredrick",                                       
    lastName: "Ezeafulukwe",
    bestMovie: "A Quiet Place",                                
    bestFood: "Tuwo Shinkafa",
    complexion: "Dark",
    birthMonth: "October",
    stateOfOrigin: "Anambra",
    groupName: "Team-Hercules",
};
console.log(teamLead.bestMovie);

//No 4 Q.E.D
let noun = "Ogochuks";
let verb = "taught";
let adjective = "awesome";

console.log("Ogochuks " + verb + " " + "me" + " " + "in an " + adjective + " way!");
console.log(`It's ${adjective} how one is ${verb} and then becomes a pro like ${noun}`);
console.log(`I learnt ${noun} ${verb} Fredrick`);
console.log(`I was ${verb} to code like ${noun}`);
console.log(`${noun} and PhemmyBlaze ${verb} JavaScript today`);

// No 5 Q.E.D
alert("Welcome to Task 5");
let numerator = prompt("Enter the first number: ");
let denominator = prompt("Enter the second number: ");
let answer = Remainder(numerator, denominator);
function Remainder(numerator, denominator) {
    return numerator % denominator;
}
console.log("Remainder = " + answer);

// No 6 
alert('welcome to task 6');
function solve(a, b, c){
    a = prompt('Enter a value');
    b = prompt('Enter b value');
    c = prompt('Enter c value');
    let result = (((-b) + Math.sqrt(Math.pow(b, 2)) - (4*a*c))/(2*a));
    let result2 = (((-b) - Math.sqrt(Math.pow(b, 2)) - (4*a*c))/(2*a));
    return `x = ${result} , y = ${result2}`;
}
console.log(solve());

//No 7 Q.E.D
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
console.log(`The ${myAdjective} ${myNoun} ${myVerb} ${myAdverb} to the open gate`);

//No 8 Q.E.D
const PI = 3.142;
let radius = 9;
function circleArea() {
    return PI * (Math.pow(9, 2));
}
console.log(Math.ceil(circleArea()));

//No 9 Q.E.D
let P = 8200;
let R = 17.5;
let T = 2.5;
let v = 100;
let S = (P * R * T) / v;
console.log(`S.I = N ${S}`);

//No 10 Q.E.D
let numberOne = 10;
let numberTwo = 4;
operationMod = numberOne % numberTwo;
console.log(operationMod);

// Test Data 1
let meritWeight = 78;
let meritHeight = 1.69;
let nutJobWeight = 92;
let nutJobHeight = 1.95;

let meritBMI = meritWeight/(meritHeight * meritHeight);
console.log(`Merit's BMI = ${meritBMI}`);

let nutJobBMI = nutJobWeight/(nutJobHeight * nutJobHeight);
console.log(`Nutjob's BMI = ${nutJobBMI}`);

//Test Data 2
let meritNewWeight = 85;
let meritNewHeight = 1.76;
let nutJobNewWeight = 95;
let nutJobNewHeight = 1.88;

let meritNewBMI = meritNewWeight/(meritNewHeight * meritNewHeight);
console.log(`Merit's New BMI = ${meritNewBMI}`);

let nutJobNewBMI = nutJobNewWeight/(nutJobNewHeight * nutJobNewHeight);
console.log(`Nutjob's New BMI = ${nutJobNewBMI}`);


const meritHigherBMI = meritBMI > nutJobBMI && meritNewBMI > nutJobNewBMI;
console.log(meritHigherBMI);






