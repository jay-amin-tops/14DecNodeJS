const yargs = require("yargs");
const utils = require("./utils.js");

yargs.command({
    command: "add",
    describe: "Add a new todo",
    builder: {
        title: {
            describe: "Todo title",
            type: "string",
            demandOption: true,
        },
        todo: {
            describe: "Todo Body",
            type: "string",
            demandOption: true,
        },
    },
    handler: function (kaipan) {
        // console.log("arg data ",kaipan);
        utils.createTodo(kaipan.title,kaipan.todo)
    },
})
yargs.command({
    command: "list",
    describe: "Get all Todos",
    handler: function () {
        utils.listTodo()
    },
});

yargs.command({
    command: "read",
    describe: "get a specific todo with the title",
    builder: {
        title: {
            describe: "Todo title",
            type: "string",
            demandOption: true,
        }
    },
    handler: function (argv) {
        utils.getOneTodo(argv.title)
    },
});
yargs.command({
    command: "delete",
    describe: " Remove a specific todo with the title",
    builder: {
        title: {
            describe: "Todo title",
            type: "string",
            demandOption: true,
        }
    },
    handler: function (argv) {
        utils.deleteTodo(argv.title)
    },
});
yargs.parse();