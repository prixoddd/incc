function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
}

console.log(stray([1, 1, 2]));