const yargs = require("yargs");

yargs.version('1.1.0') 

yargs.command({
    command: "add",
    describe: "add tow numbers",
    builder: {
        firstNumber: { 
            describe: 'First Number', 
            demandOption: true,  // Required 
            type: 'number'
        },
        secondNumber: { 
            describe: 'Second Number', 
            demandOption: true,  // Required 
            type: 'number'
        }
    },
    handler(argv) {
        console.log(argv.firstNumber+argv.secondNumber);
    }
    
})


yargs.parse();