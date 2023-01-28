// взять массив, отсортировать, вывести в новом массиве самое маленькое и самое большое число

function minMax(arr){

    k = [];

    function compareNumbers(a, b) {
        return a - b;
      }

    k.push(arr.sort(compareNumbers)[0]);
    k.push(arr.sort(compareNumbers)[arr.length - 1]);
    return k;

  }

//   оптимальное решение ;)
//   function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
//   }

console.log(minMax([1,6,17,4,5]));