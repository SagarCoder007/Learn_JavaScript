
// program to reverse string


// // let a = "mahesh varma"

// // let c = []  //blank aarray

// // a.split(" ").forEach(function (b) {

// //     c.push((b.split("").reverse().join("")))
// // })
// console.log(c.join(" "))



// program to do first letter capital in string

let a = "mahesh varma"
let m=[]
a.split(" ").forEach(function (e) {
    //   let d =e.split("")[0].toUpperCase()
    //    console.log(d)
    let k = e[0].toUpperCase() + e.slice(1)
    m.push(k)

})

console.log(m.join(" "))
