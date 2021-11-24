const EventEmitter = require('events');
const uuid = require('uuid');

/**
 * Event drivved Logger
 */
class Logger extends EventEmitter {

    fire(data) {
        this.emit('my-event', data)
    }

    handle() {
        this.on('my-event', (data) => {
            console.log('event fired:');
            console.log(data);

        })
    }
}


const myLogger = new Logger()

myLogger.handle()
myLogger.fire({
    'name': "Diaa",
    "age": 30,
    'uuid': uuid.v4()
})