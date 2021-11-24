class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greetings() {
        console.log(`Hi ${this.name}`)
        console.log(`__dirname:  ${__dirname} ,  __filename  ${__filename}`)

    }
}

module.exports = Person