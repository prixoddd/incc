function high(x){
    arr = x.split("");
    arr2 = x.split(" ");
    let gee = [];
    
    for (let i = 0; i < arr.length; i++) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz ';
        
        for (let e = 0; e < arr[i].length; e++) {
            gee.push(alphabet.indexOf(arr[i][e]) + 1);
        }  
    }
    
    let result = [];
    let total = 0;
    
    for (let i = 0; i < gee.length; i++) {
        if (gee[i] % 27 !== 0) {
        total += gee[i];
        } else {
        result.push(total);
        total = 0;
        subArray = [];
        }
    }
    
    if (total > 0) {
        result.push(total);
        }
    
    // return result;
    let maxVal = result[0];
    let maxIndex = 0;
    for (let i = 1; i < result.length; i++) {
        if (result[i] > maxVal) {
            maxVal = result[i];
            maxIndex = i;
        }
    }
    return arr2[maxIndex];
    


}
console.log(high('man i need a taxi up to ubud'));


