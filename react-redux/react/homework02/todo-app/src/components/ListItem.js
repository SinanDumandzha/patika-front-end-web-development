import React from "react";

function ListItem({ task, todos, setTodos, todo }) {
  const completedHandler = () => {
    setTodos(
      todos.map((listItem) => {
        if (todo.id === listItem.id) {
          return {
            ...listItem,
            completed: !listItem.completed,
          };
        }
        return listItem;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((listItem) => listItem.id !== todo.id));
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={completedHandler} />
        <label>{task}</label>
        <button className="destroy" onClick={deleteHandler} />
      </div>
    </li>
  );
}

export default ListItem;
