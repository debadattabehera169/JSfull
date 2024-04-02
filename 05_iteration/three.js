//for of loop

//["","",""]          //array of string
//[{},{},{}]          //array of object

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world"
for (const i of greetings) {
    console.log(i);
}

//maps          is an object hold key value pair, all are unique value
const map =new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {       //in this we can print key and value separately
    console.log(key, ':-', value);
}

const myobj ={          //object
    'Game-1': 'NFS',
    'Game-2': 'Spiderman'
}

for (const [key,value] of myobject) {       //objet is not iteratable  through forof
    console.log(key, ':-', value);
}

