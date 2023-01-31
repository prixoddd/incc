function evenOrOdd(number) {
    if(number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

console.log(evenOrOdd(-42));

function removeEveryOther(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
      res.push(arr[i]);
    }
    return res;
  }
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));