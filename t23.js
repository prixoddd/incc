function findAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(findAverage([1,2,3,4]))