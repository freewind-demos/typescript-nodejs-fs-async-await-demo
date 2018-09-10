import * as fs from 'fs'

const util = require('util')

const exists = util.promisify(fs.exists)
const readFile = util.promisify(fs.readFile)
const mkdir = util.promisify(fs.mkdir)
const writeFile = util.promisify(fs.writeFile)

async function demo() {
    if (!(await exists('test-dir'))) {
        await mkdir('test-dir')
        await writeFile('test-dir/hello.txt', 'hello, node!', 'utf-8')
    }
    const text = await readFile('test-dir/hello.txt', 'utf-8')
    console.log(text)
}

demo()