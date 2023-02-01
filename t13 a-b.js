function sumTwoSmallestNumbers(numbers) {  
    k = [];

    function compareNumbers(a, b) {
        return a - b;
    }

    k.push((numbers.sort(compareNumbers)[0]) + (numbers.sort(compareNumbers)[1]));
    
    return k.join("");
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))


// function sumTwoSmallestNumbers(numbers) {  
//     var [ a, b ] = numbers.sort((a, b) => a - b)
//     return a + b
//   }