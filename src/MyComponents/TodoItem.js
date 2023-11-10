import React from 'react'

// Functional component to display individual todo items.
export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
           {/* Display the title of the todo */}
           <h4>{todo.title}</h4>
           
           {/* Display the description of the todo */}
           <p>{todo.desc}</p>
           
           {/* Button to delete the todo, calls the onDelete method passed from the parent component */}
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        {/* Horizontal line to separate todo items */}
        <hr/> 
        </>
    )
}
