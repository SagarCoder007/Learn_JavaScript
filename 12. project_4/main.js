let input1 =document.querySelector("#input1")
let input2 =document.querySelector("#input2")
let btn =document.querySelector("#btn")

let obj={}
 btn.addEventListener("click",function(){
     let key=input1.value
     let value=input2.value
     obj[key]=value
     console.log(obj)
     input1.value=""
     input2.value=""
 })


