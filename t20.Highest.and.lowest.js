function highAndLow(numbers){
    function compareNumbers(a, b) {
        return a - b;
    }
    k = numbers.split(' ');
    z = [(k.sort(compareNumbers)[k.length -1]) + " " + (k.sort(compareNumbers)[0])].join("");
    // z.push((k.sort(compareNumbers)[k.length -1]) + " " + (k.sort(compareNumbers)[0]));
    return z
  }
  /////c/

//   function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));