// function duplicateCount(text){
//     let arr = text.toLowerCase().split("");

//     const countItems = {};
//     let n = [];

//     for (const item of arr) {
//         countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
//     }
    
//     for(let key in countItems) {
//         if (countItems[key] > 1) {
//             n.push(countItems[key]);
//         }
//     }
//     return n.length;
// }

function duplicateCount(text){
    // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []);
    return (text.toLowerCase().split('').sort().join(""));
  }

console.log(duplicateCount("aabBcde"));


var str = 'Смотри главу 3.4.5.1 для дополнительной информации';
var re = /смотри (главу \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);