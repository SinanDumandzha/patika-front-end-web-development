import React from "react";

function Form({ inputTodo, setInputTodo, todos, setTodos, todo }) {
  const inputTodoHandler = (e) => {
    setInputTodo(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        task: inputTodo,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputTodo("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus=""
        mv-mode="edit"
        aria-label="New todo"
        value={inputTodo}
        onChange={inputTodoHandler}
      />
    </form>
  );
}

export default Form;
