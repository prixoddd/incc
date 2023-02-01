function twiceAsOld(dadYearsOld, sonYearsOld) {
    z =  dadYearsOld - (sonYearsOld * 2);
    return z<0 ? -z :  z;
    // if (z<0) {
    //     return -z;
    // } else {
    //     return z;
    // }
  }

console.log(twiceAsOld(36,7));