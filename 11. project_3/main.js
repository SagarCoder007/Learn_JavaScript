// how many alphabets have been arrived in an given string

let a="maheshtechnicals"
 let c={}
 a.split("").forEach(function(e){

 if (c.hasOwnProperty(e)==false){
     c[e]=1
 }
 else {
 c[e]++ 
 }

 })
 console.log(c)

// let a={
//     name:"sagar",
//     age:20,
//     gender:"male",
//     work:"developer"
// }



