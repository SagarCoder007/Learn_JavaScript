console.log(document.body)

//childrens 
/* direct or nested element of an element 
is know as children */

//child nodes
/* elements that are direct children for 
eg head and body are the children of html */

//decendant nodes
/* all nested elements childrens their childrens
and so on... */

console.log(document.body.firstChild) 
// it refers the first child of an element 

console.log(document.body.lastChild)
// it refers the last child of an element

 console.log(document.body.childNodes)

/* it refers all child of an elements
 so it looks like an array nut its not an array
*/

//if you wanna make it an array you have do like
let arr= Array.from(document.body.childNodes)
console.log(arr)
