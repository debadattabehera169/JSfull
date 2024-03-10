// const score = 400
// console.log(score);         //here automatically defined
// const balance = new Number(100)
// console.log(balance);       //here we define the type

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));        //show 2 value after decimal

// const otherNumber = 23.6789

// console.log(otherNumber.toPrecision(3));        //return precised value or round about value

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));     //place commas between digits


// **********************maths ***********************

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));        //for lowest value use floor value
console.log(Math.max(1,2,3,4,5));
console.log(Math.random());     //always a random value comes inbetween 0 and 1
console.log((Math.random()*10)+1);      //if we multiply with 10 we get some value 0 to 10 and to net get 0 we add 1
console.log(Math.floor((Math.random()*10))+1);


const min = 10
const max =20
console.log(Math.floor(Math.random() * (max-min +1))+min);
//random give value bet 0 and 1
//max-min +1 to define the range
//min is added to scope the lower one
