function futureAdd(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 3000)
    })
}

function run() {
    futureAdd(1, 2).then((result) => {
        console.log(result)
    })
}

run()



