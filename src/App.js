// Very first React project :D

import "./App.css";
import { useState } from "react";
// useState is a React hook that takes a state's initial value and returns an array with 2 values,
// i.e., a getter and setter function

import { MdAdd } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";
import {SiLinkedin } from "react-icons/si";

const TodoInput = ({ todo, setTodo, addTodo, setTodos, todos }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        id="todo-input"
        name="todo"
        value={todo}
        placeholder="Let's get workin'..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.key==='Enter') {
            e.preventDefault();
            setTodo(e.target.value);
            setTodos([...todos, todo]);
            setTodo('');
          }
        }}
      ></input>
      <button className="add-button" id="urmom" onClick={addTodo}>
        <MdAdd size={21}/>
      </button>
    </div>
  );
};

const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="input-list">
      {todoList?.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((entry, index) => (
            <div className="todo">
              <li key={index}>{entry}</li>
              <button className="delete-button" onClick={()=>{removeTodo(entry)}}>
                <SlTrash size={18}/>

              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Add some tasks! :)</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <>
        <p className="love">
        Made with 💖 from Yuvika
        </p>
        <p className="socials"> 
          <a href="https://github.com/Yuvika4" rel="noreferrer" target="_blank"><VscGithub size={25}/></a>
          <a href="https://www.linkedin.com/in/yuvika-856524271" rel="noreferrer" target="_blank"><SiLinkedin size={25}/></a>
        </p>
        <p>
            <a href="https://yuvika4.github.io/ToDo_List/" rel="noreferrer" target="_blank" className="source">$Source | 2023 - 2024</a> 
        </p> 
        
    </>
  );
};

const App = () => {
  const [todo, setTodo] = useState("");

 
  const [todos, setTodos] = useState([]);
  
  const addTodo = () => {
    if (todo !== "") {
      
      setTodos([...todos, todo]);
      setTodo(""); 
    }
  };
  
  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo !== task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Make a To-Do List!</h1>
      <div className="Content">
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} setTodos={setTodos} todos={todos}/>
        <TodoList todoList={todos} removeTodo={deleteTodo} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
