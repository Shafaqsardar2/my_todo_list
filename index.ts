#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["Coding","Teaching"]

async function  craeteTodo (todos : string[]) {
do {
        let answer = await inquirer.prompt ({
            name: "options",
            type : "list",
            message : "Please select an option",
            choices : ["Add","Update","View","Delete"]
        });
        
        if (answer.options === "Add"){
            let addMore = await inquirer.prompt ({
                name : "addmore",
                type : "input",
                message : "Add task in the list"
            })
            todos.push (addMore.addmore)
            todos.forEach((addmore) => console.log(addmore))
        }
        else if (answer.options === "Update"){
            let updateMore = await inquirer.prompt (
                {
                    name : "UpdateItem",
                    type: "list",
                    message : "Select the task to update",
                    choices : todos.map ((item)=> (item))
                }
            )
            let addMore = await inquirer.prompt({
                name : "todo",
                message : "Add item in the list",
                type : "input"
            })
            let newTask = todos.filter((val)=> val !== updateMore.todos)
            todos = [...newTask,addMore.todo]
        }
        else if (answer.options === "View"){
            console.log("**** TO DO LIST****")
            console.log(todos)
        }
       else if (answer.options === "Delete") {
            let deleteTask = await inquirer.prompt (
                {
                    type:"list",
                    message : "Delete Task from List",
                    name : "Delete",
                    choices : todos.map((item)=>(item))
                }
            ) 
            let NewTask = todos.filter ((val) => val !== deleteTask.Delete)
            todos = [...NewTask]
            console.log(todos)
        }

    } while (true)
}
craeteTodo(todos)