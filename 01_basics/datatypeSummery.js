// primitive datatypes
//7 types :String, Number, Boolean, null, undefined, Symbol, BigInt 

//js is dynamical type

const score= 100
const socreval = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefiend
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id ===anotherId);

const bigInt = 4323232332132134902302930n



//refference type or nonprimitive
//Array, Objects, Functions

const heros = ["shaktiman", '"naagraj', "doga"]

let myObj={
    name:'dev',
    age: 24,
}

const myFunction= function(){}
console.log("hellow world");

console.log(typeof(myFunction));