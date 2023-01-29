
    let gee = [
        13,  1, 14, 27, 9,
        27, 14,  5,  5, 6
        ];


    function splitBy27() {
        let result = [];
        
        let total = 0;
        for (let i = 0; i < gee.length; i++) {
          if (gee[i] % 27 !== 0) {
            total += gee[i];
          } else {
            // subArray.push(total);
            result.push(total);
            total = 0;
            subArray = [];
          }
        }
        if (total > 0) {
            // subArray.push(total);
            result.push(total);
          }
       
        let maxVal = result[0];
        let maxIndex = 0;
        for (let i = 1; i < result.length; i++) {
        if (result[i] > maxVal) {
            maxVal = result[i];
            maxIndex = i;
        }
        }
        console.log(result);
        return maxIndex;
      }

   
    


console.log(splitBy27());