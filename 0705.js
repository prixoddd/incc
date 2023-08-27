function solution(string) {
    let arr = string.split('')
    let aaa = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toUpperCase() === arr[i]) {
            aaa.push(' ')
            aaa.push(arr[i])
            // console.log(1)
            // console.log(arr[i])
        } else {

            aaa.push(arr[i])
            // console.log(2)
            // console.log(arr[i])
        }
    }
    let sss = aaa.join('')

    // console.log(aaa)
    console.log(sss)

}

solution('camelCasing')