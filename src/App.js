import React, {useState} from 'react';
import './App.css';
import {InputArea} from "./components/inputArea"
import ToDoItem from "./components/ToDoItem"

function App() {
  const [items, setItems] = useState([]);
  const addItems = (InputText) => {
    setItems((prevItems) => {
      return [...prevItems, InputText];
    })
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index!==id;
      })
    })
  }

  return (
    <div className = "container">
      <div className = "heading">
        <h1> To-Do List </h1>
      </div>
      <InputArea onAdd = {addItems} />
      <ul>
      {items.map((item, index) => (
        <ToDoItem key = {index} id = {index} text = {item} onchecked = {deleteItem}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
