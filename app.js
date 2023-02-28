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

const log = require('./logger');
log('Did this way work too?');









