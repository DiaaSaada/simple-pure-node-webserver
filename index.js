const http = require('http')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 5000


const load404 = () => {


};
/**
 * check file extention then set the right content type
 * @param {*} filePath 
 * @returns 
 */
const getContentTypebyFile = (filePath) => {

    let contentType = 'text/html';
    let ext = path.extname(filePath);
    switch (ext) {
        case '.js':
            contentType = 'text/javascript'
            break;

        case '.css':
            contentType = 'text/css'
            break;

        case '.jpg':
            contentType = 'image/jpg'
            break;
    }
    return contentType;
}

const router = (req, rsp) => {

    let filePath = path.join(__dirname, 'public', req.url == '/' ? 'home.html' : req.url)
    let contentType = getContentTypebyFile(filePath);

    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            fs.readFile(path.join(__dirname, 'public', '404.html'), 'utf8', (err, notfoundpage) => {

                rsp.writeHead(404, { 'Content-Type': 'text/html' })
                rsp.write(notfoundpage)
                rsp.end()

            });
        } else {
            rsp.writeHead(200, { 'Content-Type': contentType })
            rsp.write(data)
            rsp.end()
        }

    })

};

const server = http.createServer(router);
server.listen(PORT, () => {
    console.log('server running on 500..')
})