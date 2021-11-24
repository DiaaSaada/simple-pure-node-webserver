const http = require('http')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 5000
const server = http.createServer((req, rsp) => {
    if (req.url == '/') {
        rsp.writeHead(200, { 'Content-Type': 'text/html' })


        fs.readFile(path.join(__dirname, 'public', 'home.html'), 'utf8',
            (error, data) => {
                if (error) throw error

                rsp.write(data)

            })
    } else if (req.url == '/api/customers') {
        rsp.writeHead(200, { 'Content-Type': 'application/json' })


        const customers = [
            { 'name': "daiaa" },
            { 'name': "boba" }
        ];

        rsp.write(JSON.stringify(customers))


    } else {
        rsp.write('ERROR')

    }
    rsp.end()

});



server.listen(PORT, () => {
    console.log('server running on 500..')
})