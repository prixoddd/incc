function filter_list(l) {
    let z = [];
    for (let i=0; i<l.length; i++) {
        if (Number.isInteger(l[i])) {
            z.push(l[i]);
        } else {
            continue;
        }
    }
    return z;
  }

  filter_list([1,2,'a','b']);