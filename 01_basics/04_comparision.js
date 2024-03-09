console.log(2 >1);  //ans will be in true false

//lets compare with diff datatypes
console.log("2">1);
console.log("02">1);

console.log(null > 0);  //here null converted into nan
console.log(null >=0);  //here null converted to zero
console.log(null == 0);         //its work differnetly than the companrision in js

console.log(undefined ==0);

//  strict check ===
console.log("2"===2);
console.log("2" ==2);