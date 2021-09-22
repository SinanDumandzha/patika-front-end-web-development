import React, { useState } from "react";

import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Result from "./components/Result";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);

  const apiKey = "AIzaSyCR757AU7Yy9HDRwO0B1QGgHzE3Yp56s0A";

  function handleChange(event) {
    const searchQuery = event.target.value;

    setSearchQuery(searchQuery);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchQuery + "&orderBy=newest&key=" + apiKey + "&maxResults=40").then((data) => {
      setResult(data.data.items);
    });
  }

  return (
    <div className="container mt-3">
      <Header handleSubmit={handleSubmit} handleChange={handleChange} />
      <Result result={result} />
    </div>
  );
};
export default App;
