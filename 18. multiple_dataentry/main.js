let input_1 = document.querySelector("#input_1")
let input_last = document.querySelector("#input_last")
let input_email = document.querySelector("#input_email")
let input_phone = document.querySelector("#input_phone")
let btn = document.querySelector(".btn")
let table = document.querySelector("table")
let index = 0

btn.addEventListener("click", function (e) {
    e.preventDefault()
    data_entry()
})

let data_entry = function () {

    if (input_1.value == "" || input_last.value == "" || input_email.value == "" || input_phone.value == "") {
        alert("plz enter all values first")

    }

    else {
        index++
        let tr = document.createElement("tr")
        let td_index = document.createElement("td")
        let td_name = document.createElement("td")
        let td_email = document.createElement("td")
        let td_phone = document.createElement("td")
        td_index.innerHTML = index
        td_name.innerHTML = `${input_1.value}  ${input_last.value}`
        td_email.innerHTML = input_email.value
        td_phone.innerHTML = input_phone.value
        tr.append(td_index, td_name, td_email, td_phone)
        

        table.appendChild(tr)

        input_1.value = ""
        input_last.value = ""
        input_email.value = ""
        input_phone.value = ""
    }
}
