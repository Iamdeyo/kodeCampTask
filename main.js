const async = require('async');

// 2.
const numbers = [1, 3, 5, 6, 3];

async.mapSeries(
  numbers,
  function (number, cb) {
    setTimeout(() => {
      cb(null, number * 2);
    }, 1000);
  },
  function (err, results) {
    console.log(err, results);
  }
);

// 3
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

// Define source and destination directories
const sourceDir = path.join(__dirname, 'File-Backup/main');
const destinationDir = path.join(__dirname, 'File-Backup/destination');

// Function to recursively copy files and files and folders
function FileBackup(source, destination) {
  const items = fs.readdirSync(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);

    // Check if the item is a folder
    const isDirectory = fs.statSync(sourcePath).isDirectory();

    if (isDirectory) {
      // Create the destination folder if it doesn't exist
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }

      FileBackup(sourcePath, destPath);
    } else {
      // Copy the file using streams
      const readStream = fs.createReadStream(sourcePath);
      const writeStream = fs.createWriteStream(destPath);

      pipeline(readStream, writeStream, (err) => {
        if (err) {
          console.error('Error: ' + err);
        } else {
          console.log('Backup succeeded');
        }
      });
    }
  }
}

// Perform the backup
FileBackup(sourceDir, destinationDir);

/*
1 Reactor Pattern is used to avoid the blocking I/O and multthreading issues. it comprises of Event demultiplexer, event loop, event queue and the application.

2. Callback pattern is used to achieve asynchronous behaviour.  Once the async operation is finished the callback function is triggered.

3. The module pattern is used to organize, structure code and help to privatize you code.

*/
