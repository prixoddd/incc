function twiceAsOld(dadYearsOld, sonYearsOld) {
    z =  dadYearsOld - (sonYearsOld * 2);
    // z<0 ? return -z : return z
    if (z<0) {
        return -z;
    } else {
        return z;
    }
  }



console.log(twiceAsOld(36,7));