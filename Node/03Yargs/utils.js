
const fs = require("fs");


const createTodo = (title,todo) => {
    // console.log(title);
    try {
        fs.access('todos.json', (err) => {
            // console.log(err);
            if (err) {
                fs.writeFileSync('todos.json', JSON.stringify([]))
            }
            const todoBuffer = fs.readFileSync("todos.json");
            // console.log(todoBuffer);
            let dataJSON = todoBuffer.toString();
            const todos = JSON.parse(dataJSON);
            // console.log(todos);

            const duplicateTodo = todos.find((todo) => {
                return todo.title === title;
            })

            if (!duplicateTodo) {
                todos.push({
                    title: title,
                    todo: todo,
                })
                dataJSON = JSON.stringify(todos);
                fs.writeFileSync("todos.json", dataJSON);
                console.log("New Todo Added");
            } else {
                console.log("New Todo title has already been used");
            }
        })
    } catch (error) {

    }
}

const listTodo = () => {
    try {
         // read from the todos.json if it exists
         const todoBuffer = fs.readFileSync("todos.json");
         // convert it to string
         let dataJSON = todoBuffer.toString();
         // parse the data
         const todos = JSON.parse(dataJSON);

         console.log(todos)

    }catch(error){
        console.log("An error occured")
    }
}
const getOneTodo = (title) => {
    try {
    // read from the todos.json if it exists
     const todoBuffer = fs.readFileSync("todos.json");
     // convert it to string
     let dataJSON = todoBuffer.toString();
     // parse the data
     const todos = JSON.parse(dataJSON);

    const Todo = todos.find((item) => {
        return item.title === title;
    })

    console.log(Todo);

    }catch(error){
        console.log("An error occured")
    }
}


const deleteTodo = (title) => {
    try {
    // read from the todos.json if it exists
     const todoBuffer = fs.readFileSync("todos.json");
     // convert it to string
     let dataJSON = todoBuffer.toString();
     // parse the data
     const todos = JSON.parse(dataJSON);
    
     const remain = todos.filter((item) => {
         return item.title != title;
     })

     dataJSON = JSON.stringify(remain);

     fs.writeFileSync("todos.json", dataJSON);

     if (remain.length === todos.length){
         console.log("This file does not exist")
     }else{
         console.log("Todo was deleted succesfully")
     }
    }catch(error){
        console.log("An error just occured")
    }
}

module.exports = {
    createTodo,
    listTodo,
    getOneTodo,
    deleteTodo
}