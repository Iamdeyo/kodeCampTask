const { EventEmitter } = require('events');

class MyeventLogger extends EventEmitter {
  #totalEvents = []; //private variable
  constructor() {
    super();
  }

  // 1. Event logging
  logger(title, desc) {
    const timestamp = new Date().toLocaleString();
    const event = { title, desc, timestamp };
    this.#totalEvents.push(event);
    this.emit('logger', event);
  }

  //  3. Display list of events
  displayEvents() {
    console.log('| event index. | event title | event timestamp     | ');

    this.#totalEvents.forEach((event, index) => {
      console.log(
        `| ${index}            | ${event.title}      | ${event.timestamp}| `
      );
    });
  }
}

const myEventLogger = new MyeventLogger();

// 2.  Event listener
myEventLogger.on('logger', (event) => {
  console.log(`Listening for events: ${event.title}`);
});

myEventLogger.logger('Title1', 'Description1');
myEventLogger.logger('Title2', 'Description2');
myEventLogger.logger('Title3', 'Description3');

myEventLogger.displayEvents();
