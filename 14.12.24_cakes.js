function cakes(recipe, available) {
  const maxCakes = []

      for(let ingr in recipe) {
          if(!available[ingr]){
              return 0
          } else {
              maxCakes.push(Math.floor(available[ingr] / recipe[ingr]))
          }
      }
      return Math.min(...maxCakes)

}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
