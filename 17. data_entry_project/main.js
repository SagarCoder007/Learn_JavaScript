
let input_1 =document.querySelector("#input_1")
let input_last =document.querySelector("#input_last")
let input_email =document.querySelector("#input_email")
let input_phone =document.querySelector("#input_phone")
let btn =document.querySelector(".btn")
let names =document.querySelector(".name")
let email =document.querySelector(".email")
let phone =document.querySelector(".phone")


btn.addEventListener("click",function(e){
  e.preventDefault()
  data_entry()
  input_1.value=""
  input_last.value=""
  input_email.value=""
  input_phone.value=""
  
})

let data_entry= function(){
    
if (input_1.value=="" ||input_last.value=="" || input_email.value=="" || input_phone.value=="" ) {
    alert("plz enter all values first")
    
}
else{
    
        names.innerHTML=`${input_1.value} ${input_last.value}`
        email.innerHTML=input_email.value
        phone.innerHTML=input_phone.value
        
    
}}
