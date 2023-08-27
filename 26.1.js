function removeSmallest(numbers) {

    function compareNumbers(a, b) {
        return a - b;
    }
    aa = numbers.sort(compareNumbers);
    aa.shift()
    return aa


}

console.log(removeSmallest([5, 3, 2, 1, 4]));