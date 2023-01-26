function betterThanAverage(classPoints, yourPoints) {
    for (let i=1; i<classPoints.length; i++){
      if (classPoints[i] > yourPoints) {
          return false;
          break;
          } else {
        return true;
      }
    }
  }
  