

//  let age =prompt("enter your age here ?")

//  if(age >=18){
//     document.write("you can drive")
//  }

//  else if(age == ""){
//  alert("plz enter a valid input")
//  }
//  else{
//  document.write("you cannot drive")
//  }

let age = document.querySelector("input")
let btn = document.querySelector("button")
let result = document.querySelector("h2")

btn.addEventListener("click", () => {

    if (age.value >= 18){

        result.innerText = "obviously you can drive now!!"
        result.style.color = "green"
    }
        
        

else if (age.value == "") {
        result.innerText = "enter a valid input!!"
        result.style.color = "yellow"

    }



    else {
        result.innerText = "so sorry you cannot drive!!"
        result.style.color = "red"

    }

    // age.value = null
    age.value = ""
})


