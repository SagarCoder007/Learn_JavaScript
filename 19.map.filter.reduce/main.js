console.log("Map_Filter& Reduce in JS ")

//IMPORTANT NOTE....
/* Remember that the main value of an array never changes */

//map method
/* map method help to generate a new array rather than for each works on to the operations of an array */

let arr=[34,56,68,9,1,4,8]

 let a= arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value + 1
})
console.log(a)

//filter method 

/* filter method help to filters N ARRAY and can create a new array */

let arr2=[20,6,35,18,1,4,8]

let b=arr2.filter((k)=>{
  return k<10
})
console.log(b)

//Reduce method

let arr3=[2,67,5,18,19,4,8]

const dicrease_fun=(sagar,mahesh)=>{
  return sagar+mahesh
}

let f=arr3.reduce(dicrease_fun)
console.log(f)

