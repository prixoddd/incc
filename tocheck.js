function towerBuilder(nFloors){
    let space,star, tower = [];
    
    for(i = 1; i <= nFloors; i++){
        space = " ".repeat(nFloors - i);
        star  = "*".repeat((2*i) - 1);
        tower.push(`${space}${star}${space}`);
    }
    return tower;   
}

console.log(towerBuilder(2));
