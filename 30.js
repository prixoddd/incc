// function check(a, x) {
//     for(let i = 0; i < a.length; i++) {
//         if (a[i] === x) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(check([66, 101], 77));

// function greet (name, owner) {
//     if (name === owner) {
//         return `Hello boss`;
//     } else {
//         return "Hello guest";
//     }
// }
//
// console.log(greet('Daniel', 'Daniel'));

function XO(str) {
    let b = str.toLowerCase().split("")
    let result = {};
    for (let i = 0; i < b.length; ++i)
    {
        let a = b[i];
        if (result[a] !== undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    return result.x === result.o;

}

console.log(XO("xxOo"));
//
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }