if(true){       //this is the scope
    let a = 10
    const b = 20
    var c = 30
    //console.log("inner", a);
}

//let c= 300
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Dev"
    function two(){
        const website = 'youtube'
        //console.log(username);
    }
  //  console.log(website);
    two()
}

//one()

if(true){
    const username ="dev"
    if(username ==="dev"){
        const website = " youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);
//----------------------------------interesting
function addone(num){
    return num+1;
}
//console.log(addone(5));

const addtwo = function(num){       //called expression
    return num+2
}
//console.log(addtwo(5));
