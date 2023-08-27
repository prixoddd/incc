// const number=(array) =>{
//     return array.map((el, index) => {
//         return `${index+1}: ${el}`
//     })
// }
//
// console.log(number(["a", "b", "c"]))

function between(a, b) {
    let gee = []

    for(let i=a-1; i<=b; i++) {
        gee.push(i)
    }
    return gee
}

console.log(between(2, 5));