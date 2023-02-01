function findShort(s){
    arr = s.split(" ");

    function compareNumbers(a, b) {
        return a.length - b.length;
    }
    // g = arr.sort(compareNumbers);
    g = arr.sort((a, b) => a.length - b.length);

    return g[0].length;


}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));