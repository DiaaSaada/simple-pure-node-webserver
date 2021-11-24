const http = require('http')


http.createServer((req, rsp) => {

    rsp.write("Hello world2222")
    rsp.end()
}).listen(9000, () => {
    console.log('server running..')
})