function digitalRoot(n) {

    let a = n.toString().split("")

    let result = 0

    for (let i = 0; i < a.length; i++) {
        result += Number(a[i])

    }

    if (result.toString().length === 1) {
        return result
    } else {
        return digitalRoot(result)
    }


}