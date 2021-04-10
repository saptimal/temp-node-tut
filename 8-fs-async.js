// Files modules methods : fs modules

const {
  readFile,
  writeFile
} = require('fs')
// read file "firt.txt":
readFile('./content/first.txt', 'utf8', (err, result) => {
      if (err) {
        console.log(err)
        return
      }
    }
    const second = result
    // Write file "second.txt":
    writeFile(
      './content/third-result-async.txt', 'utf8', `I am the brand new third text file. Here is the result of merging 1st and
2nd into a new file: ${first}, ${second}`,
(err, result) => {
  if (err) {
    console.log(err)
    return
  }
        console.log(result)
      }
    )



    // The existing file will be overwritten. If you want to append, use the "Flag" option object
