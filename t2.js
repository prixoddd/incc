function betterThanAverage(classPoints, yourPoints) {

    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
      sum += classPoints[i];
    }
    let classAverage = sum / classPoints.length;
  
    if (yourPoints > classAverage) {
      return true;
    } else {
      return false;
    }
  }