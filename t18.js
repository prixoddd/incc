var countSheep = function (num){
    s = "";
    for (let i=0; i<num; i++) {
        s += `${i+1} sheep...`;
    }
    return s;
  }

console.log(countSheep(3));