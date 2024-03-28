//Immediately Invoked Function Expressions (IIFE)
//used to immediated run the code and also used to save the code from global trashes.

// function chai(){             //simple function
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai(){       // named iife
    console.log(`DB CONNECTED`);
})();

(() =>{
    console.log(`DB CONNECTED TWO`);
}) ();

((name)=>{      //unnamed iife
    console.log(`DB CONNECTED THREE ${name}`);
}) ('dev');