const myobj = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myobj) {          //forin loop 
    //console.log(`${key} shortcut is for  ${myobj[key]}`);
}

//forin in array
 const programming = ["js", "rb", "py"," java","cpp"]
 for (const key in programming) {
    //console.log(key);
   // console.log(programming[key]);
 }

 //forin loop in map
const map =new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')

for (const key in map) {
    console.log(key);       //print nothing becase map is not iteratable
}