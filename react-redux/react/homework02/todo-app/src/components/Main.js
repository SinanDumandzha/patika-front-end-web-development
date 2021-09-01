import React from "react";
import List from "./List";
import MainFooter from "./MainFooter";

function Main({ todos, setTodos, filterTodos, status, setStatus }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
      </section>
      <MainFooter status={status} setStatus={setStatus} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Main;
