
//Funtions in js

/* so if we have to computate a similar properties agaian
and again so rather than making it we make function so the can
help to write that properties by itself
*/
// declaring a function

function myname (a,b){
    return(a-b)
}

let a =25
let b =46

console.log("the sum of a + b is :", myname(a,b))

// we can also write function in a form of arrow function
// it is also a well known function 

const hello =() =>{
    console.log("I am a web-developer")
}
/* only defining a function wont make any change 
in your output screen , so for it we have to invoke it 
for eg:- hello();
*/

hello();