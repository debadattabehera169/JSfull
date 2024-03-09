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

//******************************* 
//memory: stack(in this we get a cpy of datatype and we do modification on that) 
//    heap(non-primitive type) if we do any modification we perform on the reffrence of the datatype 
//it has direct imapct on our datatyps

let myYoutubeName = "devYoutube"
let anothername = myYoutubeName
anothername = "devil"
console.log(anothername);
console.log(myYoutubeName);
//in above we change over in copy so our original value is not reflected
let user1 ={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let user2 = user1
 user2.email = "user2@gmail.com"
 //in this as our datatype is non primitive type we perform any task on reffrence basis, so reflection shows in original data

 console.log(user1.email);
 console.log(user2.email);