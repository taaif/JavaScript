// Datatype
let  name = "Taaif";
let age = 22;
const year = 2001;
console.log(name);
// boolean value
let x = 3 >2; 
console.log(x);
//undfined value
let z ; 
console.log(z);
//null value 
let c = null;
console.log(c);
// nan value
let s = "hello";
console.log(s*6);
// literal tamplate
let d = `this is a 
javascript course.`;
console.log(d);
// string length
let lan = 'JavaScript';
console.log(lan.length);
//string concatnation 
let l  = 'JavaScript';
let m = 'Welcome to ' + l + '.';
console.log(m);
//printing at an index
console.log(l[1]);
//array 
let colors = ["red", "blue", "green"];
console.log(colors[2]);
colors[1] = 'black';
console.log(colors);
//array length
console.log(colors.length);
//include
console.log(colors.includes("red"));
//unshift
colors.unshift('orange');
console.log(colors);
//shift
const del = colors.shift();
console.log(del);
//push
colors.push('white');
console.log(colors);
//pop
const de = colors.pop();
console.log(de);
//is array
console.log(Array.isArray(l));
console.log(Array.isArray(colors));
// 2D array
const values = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];
console.log(values[1][1]);
//split
let message = 'Welcome to JavaScript';
let result = message.split(' ');
console.log(result);
//join 
let message2 = ['Welcome', 'to', 'JavaScript'];
let result2 = message2.join('*');
console.log(result2);
// if
let a = 14;
if(a < 12){
    console.log("Sorry, you are not older enough to play this game. ");
}else{
    console.log("welcome to the game");
}
// elseif 
let num = 0;
if(num > 0){
    console.log('+');
}else if(num < 0 ){
    console.log('-');
}else{
    console.log('zero');
}
//switch
let colors2 = ["red", "green", "blue"];
let colorNumber = 25;
switch(colorNumber){
    case 1:
        console.log(colors2[0]);
        break;
    case 2:
        console.log(colors2[1]);
        break;
    case 3:
    case 4:
    case 5:
        console.log(colors2[2]);
        break;
    default:
        console.log('white');
        break;
}
// for loop inc
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// for loop dec
for(let i = 5; i >= 1; i--){
    console.log(i);
}
//array in for loop
let col = ["red", "green", "blue", "black", "white"];
for(let i =0; i < col.length; i++){
    console.log(col[i]);}
for(let color of col){
    console.log(color);
}
//for of with text
for(let character of message){
    console.log(character);
}
// while 
let c2 = ["red", "green", "blue"];
let i = 0;
while(i < c2.length){
    console.log(c2[i]);
    i++;
}
//while do
do{
    console.log(c2[i]);
    i++;
}while(i < c2.length);
//break
const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] == 0 ){
        break;
    }
    console.log(numbers[i]); 
}
console.log('***');
//continue
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] == 0 ){
        continue;
    }
    console.log(numbers[i]); 
}
// functions
function printNumbers(){
    console.log(1);
    console.log(2);
    console.log(3);
}
printNumbers();
//parameter
function printNumbers(to){
    for(let i = 0; i<= to; i++){
        console.log(i);
    }
}
printNumbers(6);
// more parameter
function add(firstNum, secondNum){
    console.log(firstNum+secondNum);
}
add(5, 3);
// unexpected value 
add("Taaif ", "Alahmadi")
//return
function add2(first, second){
    let cal = first + second;
    return cal;
}
add2(3, 4);