var url = 'http://mylogger.io/log'; //not real just for show

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// module.exports.log = log;  //The first .log can be changed to whatever we want the import module to call it
module.exports = log;   //can also just be written this way which just exports the function not an object








