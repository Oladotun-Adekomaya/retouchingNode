// import fs from 'fs'
import fs from 'fs/promises'

//readFile() - callback


// return fs.readFile(path, 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// ReadFileSync() - Synchronous version
// const data = fs.readFileSync('./learning.txt','utf-8');
// console.log(data)

// readFile() - Promise .then()
// fs.readFile('./learning.txt','utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./learning.txt', 'utf-8')
        console.log(data)
    } catch (error) {
        throw new Error(error)
    }
}