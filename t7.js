// function openOrSenior(data){
//     k = [];
//     for (let i=0; i<data.length; i++) {
//       if ([i][0] >= 55 && [i][1] < 7) {
//         k.join("Senior");
//       } else {
//         k.join("Open");
//       }
//       console.log(k);
//     }
//   }

  function openOrSenior(data){
    var k = [];
    for (let i=0; i<data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        k.push("Senior");
      } else {
        k.push("Open");
    }
    }
    return k;
}

  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

  console.log(k);
    console.log(data[0][0]);
    console.log(data[0][1]);
