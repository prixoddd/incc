function arrayDiff(a, b) {
    let newarr = [...a];
    let c = [];

    for(e=0; e<b.length; e++){
        // console.log(b[e])

        for(let i=0; i<newarr.length; i++) {
            // console.log(newarr[i], b[e])
            if(newarr[i] !== b[e]) {
                c.push(newarr[i]);
                
            }
            
        }
        // console.log("form")
        // console.log(`newarr ${newarr}, c ${c}`)
        newarr = [...c];
        c = [];
    }

    return newarr;
}


// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }

console.log(arrayDiff([1,2,2,3], [2, 1]));