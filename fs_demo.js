//import Person from './person'
const Person = require('./person')
const fs = require('fs')
const path = require('path')
const loremIpsum = require("lorem-ipsum").loremIpsum;


const p1 = new Person("Diaa", 30)
p1.greetings()

if (!fs.existsSync((path.join(__dirname, "tests")))) {

    fs.mkdir(path.join(__dirname, "/tests"), {}, (error) => {
        if (error) throw error;

        console.log("folder created>>>")
    })


}
const filename = path.join(__dirname, "/tests", "hello.txt")
const newfilename = path.join(__dirname, "/tests", "helloworld.txt")
    // create and write to file
fs.appendFile(filename, loremIpsum(), (error) => {
    if (error) throw error;

    console.log("file created>>>")

})

// read from file
fs.readFile(filename, "utf8", (error, data) => {
    if (error) throw error;
    console.log(data)
})

// read from file
fs.rename(filename, newfilename, (error) => {
    if (error) throw error;
    console.log("file renamed>>>")
})