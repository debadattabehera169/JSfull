//in js array having mix type of data or size also dynamic in nature
//when we cpy a array shalow copy happend(means refferene is shared, changeover effects on real array)
const myArr = [1,2,3,4,5,6,7,8];
const myHeros = ["shaktiman","naagraj"]
const arr2 =new Array(1,2,3,4,5)
//console.log(myArr[0]);

//Array methods
// myArr.push(6)
// myArr.push(9)
// myArr.pop()
// console.log(myArr);

myArr.unshift(5)        //add value at the first of the array, whcih shift all the element not optimizied
myArr.unshift(4)
myArr.shift()       //remove the first element
//console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArray = myArr.join()       //join to arrry results in string
// console.log(myArr);
// console.log(newArray);
// console.log(typeof(newArray));

//slice,splice 
console.log("A",myArr);
const myn1 =myArr.slice(1,3)    //last range not inclueded its just print a copy of our required elements
console.log(myn1);
console.log("B",myArr);
const myn2 =myArr.splice(1,3)   //last range inlcuded and it cuts the part from original array and then print(original array manupulated)
console.log(myn2);
console.log("C",myArr);

