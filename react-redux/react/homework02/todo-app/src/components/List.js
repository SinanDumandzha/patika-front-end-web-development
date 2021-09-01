import React from "react";
import ListItem from "./ListItem";

function List({ todos, setTodos, filterTodos }) {
  return (
    <ul className="todo-list">
      {filterTodos.map((todo) => (
        <ListItem todos={todos} setTodos={setTodos} task={todo.task} todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default List;
