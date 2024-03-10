const  marvel_heros = ["thor", "ironman","spiderman"]
const  dc_heros = ["superman", "flash", "Batman"]

//marvel_heros.push(dc_heros)     //shows array insdie array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)       //return a new array after concating
//console.log(allheros);

const all_new_heros =[...marvel_heros, ...dc_heros]
//console.log(all_new_heros);     //spread operator

const another_array = [1,2,3,[4,5,6],7,[6,7[5,6]]]
const real_another_array= another_array.flat(Infinity)      //combine all subarray and make a singel array
console.log(real_another_array);

console.log(Array.isArray("DevBabu"))       //we can verify its array or not
console.log(Array.from("Debadatta"));

console.log(Array.from({name:"Dev"})); //intresting

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //make and return an array
