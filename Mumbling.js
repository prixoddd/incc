function accum(s) {
    sArr = s.split("");
    newArr = [];
	for(let i=0; i<s.length; i++) {
        newArr.push(sArr[i].toUpperCase());
        for(let e=0; e<i; e++) {
            newArr.push(sArr[i].toLowerCase());
        }
        if(i !== sArr.length - 1) {
            newArr.push("-");
        }
    }
    
    return newArr.join("");
}

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

console.log(accum("ZpglnRxqenU"));