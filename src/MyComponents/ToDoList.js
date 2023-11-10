import React from 'react'
// Importing TodoItem component.
import {TodoItem} from "./TodoItem";

// Functional component to display the list of todos.
export const ToDoList = (props) => {

    // Inline style for the container.
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }

    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">To-Do List</h3>
            
            {/* Check if the todo list is empty. */}
            {props.todoList.length===0? 
                "No To-Do List to display"
            :  
                // Map through each todo and display it using the TodoItem component.
                props.todoList.map((todo)=>{
                    console.log(todo.sno);
                    return (
                        // TodoItem component for individual todo item.
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                    )
                })
            } 
        </div>
    )
}
