const name = "DebadattaBehera "
const repoCount = 50
console.log(name + repoCount+ "Value") 
//now  a days by string interpolation
console.log(`hellow my name is ${name} and my repo count is ${repoCount}`);

console.log("hellow ");
//declaration of string
const gameName = new String (`Debadatta Behera`)

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,3)
console.log(newString);
//in slice we can use negetive value so that we can print in reverse way
const anotherStirg = gameName.slice(-8,4)
console.log(anotherStirg)
//trim method reduce the spaces
const newStirngOne = "      dev     "
console.log(newStirngOne);
console.log(newStirngOne.trim());
//replace
const url = "https://goo%20gle.com"
console.log(url.replace('%20', ''))

console.log(url.includes('google'))

//convert a string to Array
console.log(gameName.split('-'));
