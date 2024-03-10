//singleton when we create object form constructor 
Object.create
//object literals

const mysym = Symbol("key1")

const jsUser ={
    name:"Dev",
    "full name":"debadatta behera",
    [mysym]:"mykey1",     //this value cant be  accessed by dot operation
    age: 24,
    location: "khordha",
    email: "dev@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
}
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
//console.log(jsUser.mysym);      //but here its not used as symbol
//console.log(jsUser[mysym]);       //so use [] during declarion of symbol


//Object.freeze(jsUser)       //to freeze the object 
jsUser.email ="devil@gmail.com"     //to change the value
//console.log(jsUser[jsUser]);

jsUser.greeting = function(){
    console.log(`hellow js user`);      //string interpolation to make refference we use this
}

jsUser.greetingtwo =function(){
    console.log(`hello js user  ${this.name}`);//here use the function as reffrence
}

console.log(jsUser.greeting);   //undefiend
console.log(jsUser.greeting());     //hellow js user
console.log(jsUser.greetingtwo());


