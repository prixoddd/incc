// function descendingOrder(n){
//     l = n.toString().split("");
//     s = [];
//     for(let i=l.length; i>=0; i--) {
//       s.push(l[i]);
//     }
//     b=s.join("")
//     console.log(b);
//     // return b;
//   }

// descendingOrder(51);

function descendingOrder(n){
    l = n.toString().split("").sort();
    s = [];
    for(let i=l.length; i>=0; i--) {
        s.push(l[i]);
    }
    return Number(s.join(""));
  }

console.log(descendingOrder(0));
