// console.log("start apps!");
// const _ = require('lodash');

// const fs = require('fs');
// const os = require('os');

// const notes = require('./nodemod');

// var res = notes.addNote();
// console.log("test: "+res);

// var sum = notes.add(9,7);
// console.log("Result: ", sum)

// console.log(_.isString(true));
// console.log(_.isString('Jason'));

// var filteredArray = _.uniq(['Jason','JSON',1,1,2,2,3,3]);
// console.log(filteredArray);

// var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}, you are ${notes.age}\n`, (err) => {
//     if(err){
//         console.log("unable to write to file!");
//     }
// });

console.log('Starting app.js');

const fs = require('fs');

const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./nodemod');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);

console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
     var note = notes.addNote(argv.title, argv.body);
     if (note) {
          console.log('Note created');
          notes.logNote(note)
     } else {
          console.log('Note title taken');
     }
} else if (command === 'list'){
     var allnotes = notes.getAll();
     console.log(`There are ${allnotes.length} note(s)`)
     allnotes.forEach((element) => notes.logNote(element));
} else if (command === 'read') {
     var note = notes.getNote(argv.title);
     if (note) {
          console.log('Note found');
          notes.logNote(note)
     } else {
          console.log('Note not found');
     }
} else if (command === 'remove') {
     var noteRemoved = notes.removeNote(argv.title);
     var message = noteRemoved ? 'Note was removed' : 'Note not found';
     console.log(message);
} else {
     console.log('Command not recognized');
}