function duplicateCount(text){
    let arr = text.toLowerCase().split("");

    const countItems = {};
    let n = [];

    for (const item of arr) {
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    
    for(let key in countItems) {
        if (countItems[key] > 1) {
            n.push(countItems[key]);
        }
    }
    return n.length;
}

console.log(duplicateCount("aabBcde"));