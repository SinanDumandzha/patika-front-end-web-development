import React from "react";
import Form from "./Form";

function Header({ inputTodo, setInputTodo, todos, setTodos }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <Form inputTodo={inputTodo} setInputTodo={setInputTodo} todos={todos} setTodos={setTodos} />
    </header>
  );
}

export default Header;
