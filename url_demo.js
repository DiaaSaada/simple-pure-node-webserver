const url = require('url')


const myURL = new URL("https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js/4482701?aaaa=bbbb&ccc=ddd")


console.log(myURL.href)
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.searchParams)
myURL.searchParams.forEach((val, key) => {
    console.log(`k: ${key}, val:  ${val}`)
})