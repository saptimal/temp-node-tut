// Files modules methods : fs modules

const {readFileSync, writeFileSync} = require('fs');
// read file:
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Create file:
writeFileSync('./content/third-result-sync.txt',
`I am the brand new third text file. Here is the result of merging 1st and
2nd into a new file: ${first}, ${second}`, {flag: 'a'});

// The existing file will be overwritten. If you want to append, use the "Flag" option object
