// function sayHello(name) {
//     console.log('Hello ' + name);  //console is part of the global scope
// }

// sayHello('Willy');

//console.log()  //global scope via the window object
//setTimeout() 
//clearTimeout()
//setInterval()
//clearInterval
//window object is in the browser only, but is not in node
//in node you use global. instead of window.


//global object
// var message = '';    //this will come out undefined 
// console.log(global.message);

//Modules in Node
//Every node application has atleast one file/module       every variables/function are scope to their module, not globally
//  console.log(module);

// require('./filename');  //this returns the object that is exported from the exported module

// const logger = require('./logger');  //always use const so we don't accidently overwrite

// console.log(logger);

// logger.log('Did I make this work?');  //Use this when module.exports.log = log;

// const log = require('./logger');
// log('Did this way work too?');

//Module Wrapper Function

//Path Module

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);


//OS (Operating System) Module

// const os = require('os');
// var totalMem = os.totalmem();
// var freeMem = os.freemem();
// console.log(totalMem/1000000000);
// console.log(freeMem/1000000000);

//File System (fs) Module

// const fs = require('fs');
// // fs. all options come as either Sync or Blocking, METHOD WITH SYNC AFFIX IS BLOCKING NOT ASYNCRONOUS
// //THIS IS THE BLOCKING VERSION
// // const files = fs.readdirSync('./');
// // console.log(files);
// //THIS IS THE ASYNC VERSION
// fs.readdir('./', function(err, files) {   // location then takes a callback function with 2 parameters
//     if (err) console.log('Error', err);  
//     else console.log('Result', files);
// });

//EVENTS MODULE and EVENTS ARGUMENTS

// const EventEmitter = require('events');  // Note Capital letters, it is a CLASS, which is a container for properties and functions
// //In order to use EventEmiiter you need to create an instance of this class
// const emitter = new EventEmitter();  //this is an object
// //Class is like Human, Object is like John      Object is an actual instance of the class

// //Register a listener
// //on and addListener are the same  --Takes 2 arguments('nameOfEvent', callbackFunction/Listener)
// emitter.on('messageLogged', (arg) => {   //arrow function but could be , function(arg) {}
//     console.log('Listener called', arg);
// });
// emitter.on('logging', (e) => {
//     console.log('Logging', e);
// });


// emitter.emit('logging', {data: 'message'});
// emitter.emit('messageLogged', {id : 1, url: 'http://' });  //second part is even argument

//Raise: logging (data: message)
//************************************************ */
//************************************************ */
//************************************************ */
//************************************************ */
//************************************************ */
//Exercise Events using second part of logger.js

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg)
// });
// logger.log('Did this work also?');
//************************************************ */
//************************************************ */
//************************************************ */
//************************************************ */
//************************************************ */

// //Recreation Exercise
// const ConsoleLog = require('./logger');
// const does = new ConsoleLog();

// does.on('emission part 1', (e) => {
//     console.log('App.js e watcher is working', e);
// });

// does.log('This is using the method in app.js');

//HTTP MODULE FOR CREATING NETWORKING APPLICATIONS ----------------------------

const http = require('http');

// const server = http.createServer();    //server is an event emitter  
const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));                 //here we want to return an array of objects using JSON
        res.end();
    }
});    //usually pass a callback to the create server method ---Takes two parameters, request and response

// server.on('connection', (socket) => {   not commonly done
//     console.log('New connection...');
// });
server.listen(4000);    //arg is a port

console.log('Listening on port 4000...');


























