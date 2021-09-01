import React, { useState, useEffect } from "react";

function MainFooter({ status, setStatus, todos, setTodos }) {
  const [count, setCount] = useState(0);

  const allHandler = () => {
    setStatus("all");
  };
  const activeHandler = () => {
    setStatus("active");
  };
  const completedHandler = () => {
    setStatus("completed");
  };
  const clearHandler = () => {
    setTodos(todos.filter((listItem) => listItem.completed !== true));
  };

  useEffect(() => {
    let allItems = todos.filter((item) => item !== item.completed);
    setCount(allItems.length);
  }, [todos, status]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button className={onclick ? "selected" : ""} onClick={allHandler}>
            All
          </button>
        </li>
        <li>
          <button className={onclick ? "selected" : ""} onClick={activeHandler}>
            Active
          </button>
        </li>
        <li>
          <button className={onclick ? "selected" : ""} onClick={completedHandler}>
            Completed
          </button>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearHandler}>
        Clear completed
      </button>
    </footer>
  );
}

export default MainFooter;
