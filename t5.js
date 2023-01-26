const reverseSeq = n => {
    let s = [];
      n = n + 1;
      for (let i=1; i<n; i++){
        s.push(n-i);
      }
    return s;
    };