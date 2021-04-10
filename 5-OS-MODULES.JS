
const os = require('os')

// infos about current user
const user = os.userInfo()
console.log(user)
// Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

// An oject example :
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
  }

console.log(currentOS)
