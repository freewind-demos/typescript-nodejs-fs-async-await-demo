async function futureAdd(a, b) {
    console.log('will calculate: ' + a + ' + ' + b)
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 3000)
    })
}

async function run() {
    const result = await futureAdd(1, 2)
    console.log('result: ' + result)
}

run()



