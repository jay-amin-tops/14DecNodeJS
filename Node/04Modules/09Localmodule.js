// Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community can use it. For example, if you need to connect to MongoDB and fetch data then you can create a module for it, which can be reused in your application.
var log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    gmete: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    }
};

module.exports = log