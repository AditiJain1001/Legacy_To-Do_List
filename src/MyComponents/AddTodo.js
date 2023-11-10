import React, { useState } from 'react';

// Functional component to add a new todo.
export const AddTodo = ({ addTodo }) => {

    // States to hold the title and description of the new todo.
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // Handler function to submit the new todo.
    const submit = (e) => {
        e.preventDefault(); // Prevent default form submission.

        // Ensure both title and description are provided.
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            // Call the addTodo function passed as a prop to save the todo.
            addTodo(title, desc);

            // Reset the form inputs for next entry.
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    {/* Two-way data binding for the title input */}
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    {/* Two-way data binding for the description input */}
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                {/* Button to submit the form and add the todo */}
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}