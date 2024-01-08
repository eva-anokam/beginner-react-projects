import { useState } from "react";
import "./List.css";
import Stats from "./Stats";
import emptyState from "./assets/empty.gif";
import emptyStateLight from "./assets/empty-light.gif";
import deleteIcon from "../images/icon-sun.svg";
export default function List(props) {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState({ todo: "", isComplete: false });
  const [currTab, setCurrTab] = useState("all");

  function handleInputChange(event) {
    setNewTodo((oldVal) => ({ ...oldVal, todo: event.target.value }));
  }
  function addNewTodo(event, todoVal) {
    if (event.key === "Enter") {
      setTodoList((oldList) => [...oldList, todoVal]);
      setNewTodo({ todo: "", isComplete: false});
      event.target.value = "";
    }
  }

  function toggleDone(id) {
    setTodoList((oldList) => {
      const updatedArray = oldList.map((eachItem, index) => {
        if (index === id) {
          return { ...eachItem, isComplete: !eachItem.isComplete };
        } else {
          return eachItem;
        }
      });
      return updatedArray;
    });
    }
    function deleteTodo(id) {
        setTodoList(oldList => {
            const newArr =  oldList.filter((item, index) => index !== id);
            return newArr
        })
    }
  const toListElementsDefault = todoList.map((item, index) => {
    return (
      <li
        key={index}
        className={`${item.isComplete ? "todo-item done" : "todo-item"}`}
        id={index}
      >
        <div
          onClick={() => toggleDone(index)}
          className={`${
            item.isComplete ? " todo-item__text done" : "todo-item__text"
          }`}
        >
          <div className="circle"></div>
          <span>{item.todo}</span>
        </div>
        <div className="delete-icon" onClick={() => deleteTodo(index)}>
          x
        </div>
      </li>
    );
  });
  const toListElementsActive = todoList.map((item, index) => {
    if (item.isComplete === false) {
      return (
        <li
          key={index}
          className={`${item.isComplete ? "todo-item done" : "todo-item"}`}
          id={index}
          >
          <div
            onClick={() => toggleDone(index)}
            className={`${
              item.isComplete ? " todo-item__text done" : "todo-item__text"
            }`}
          >
            <div className="circle"></div>
            <span>{item.todo}</span>
          </div>
          <div className="delete-icon"
          onClick={() => deleteTodo(index)}
          >x</div>
        </li>
      );
    }
  });
  const toListElementsCompleted = todoList.map((item, index) => {
    if (item.isComplete === true) {
      return (
        <li
          key={index}
          className="todo-item"
          id={index}
          >
              <div
            onClick={() => toggleDone(index)}
                  className={`${item.isComplete ? " todo-item__text done" : "todo-item__text"}`}>
            <div className="circle"></div>
            <span>{item.todo}</span>
          </div>
          <div className="delete-icon"
          onClick={() => deleteTodo(index)}
          >x</div>
        </li>
      );
    }
  });
  return (
    <main>
      <input
        type="text"
        name="todo"
        id=""
        placeholder="Create a new todo"
        className={props.darkMode ? "bg-gray" : "bg-light box-shadow"}
        onChange={handleInputChange}
        onKeyDown={(event) => addNewTodo(event, newTodo)}
      />
      {todoList.length < 1 ? (
        <div className="empty-state">
          <img src={props.darkMode ? emptyState : emptyStateLight} alt="empty animation" />
          <p>Empty slate! Let's start jotting down tasks.</p>
        </div>
      ) : (
        <div className={props.darkMode ? "bg-gray todo-list" : "bg-light box-shadow todo-list"}>
          <ul>
            {currTab === "all"
              ? toListElementsDefault
              : currTab === "active"
              ? toListElementsActive
              : toListElementsCompleted}
          </ul>
        </div>
      )}
      <Stats
        todoList={todoList}
        setTodoList={setTodoList}
        currTab={currTab}
              setCurrTab={setCurrTab}
              darkMode={props.darkMode}
      />
    </main>
  );
}
