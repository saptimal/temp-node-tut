const path = require('path')
console.log(path.sep)
// returns the path
const filePath = path.join('/content/', 'subfolder/', 'test.txt')
console.log(filePath)
// returns just the base file
const base = path.basename(filePath)
console.log(base)

//returns absolute path:
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
