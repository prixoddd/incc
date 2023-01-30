function squareDigits(num){
    let g = num.toString().split("");
    let e = "";
    for(let i=0; i<g.length; i++) {
        e += (g[i] * g[i]);
    }
    return Number(e);
}

// function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }

console.log(squareDigits(3212));