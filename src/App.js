import Header from "./MyComponents/Header";
import { ToDoList } from "./MyComponents/ToDoList";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // Initialize the todo list from local storage or start with an empty array.
  let initTodo;
  if (localStorage.getItem("todoList") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoList"));
  }

  // Function to delete a todo item.
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    // Updating the state in an immutable way by filtering the todos.
    setTodos(todoList.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todoList);
    // Save the updated list to local storage.
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  // Function to add a new todo.
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todoList.length === 0) {
      sno = 0;
    }
    else {
      // Serial number for new todo is the incremented value of the last todo's sno.
      sno = todoList[todoList.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    // Update the state to include the new todo.
    setTodos([...todoList, myTodo]);
    console.log(myTodo);
  }

  // State hook to maintain the list of todos.
  const [todoList, setTodos] = useState(initTodo);

  // Effect hook to save the todo list in local storage whenever it changes.
  useEffect(() => {
    localStorage.setItem("todoListList", JSON.stringify(todoList));
  }, [todoList]);

  return ( 
    <>
    {/* Set up React Router and layout of the App */}
    <Router>
      <div className="d-flex flex-column vh-100">
        <Header title="My To-Do List" searchBar={false} />
        <div className="flex-grow-1">
          <Switch>
            {/* Route for homepage which displays addTodo form and the todo list */}
            <Route exact path="/" render={()=>{
              return(
              <>
                <AddTodo addTodo={addTodo} />
                <ToDoList todoList={todoList} onDelete={onDelete} />
              </>)
            }}> 
            </Route>
            {/* Route for about page */}
            <Route exact path="/about">
              <About />
            </Route> 
          </Switch>
        </div>  
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
