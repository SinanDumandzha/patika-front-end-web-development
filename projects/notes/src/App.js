import React, { useState } from "react";

import Notes from "../src/components/Notes";
import Form from "../src/components/Form";

const setLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

function App() {
  const [mode, setMode] = useState("create");
  const [items, setItems] = useState([]);
  const [formItem, setFormItem] = useState({ title: "", note: "" });

  const handleInputChange = (name, value) => {
    setFormItem({ ...formItem, [name]: value });
  };

  const handleCreate = () => {
    const { title, note } = formItem;

    const newItem = {
      id: items.length + 1,
      title,
      note,
    };

    setItems([...items, newItem]);
    setLocalStorage("items", [...items, newItem]);

    setFormItem({ title: "", note: "" });
  };

  const handleEdit = (index) => {
    setMode("edit");
    setFormItem(items[index]);
  };

  const handleUpdate = () => {
    const index = items.findIndex((item) => item.id === formItem.id);
    const updatedItems = [...items];
    updatedItems[index] = formItem;

    setMode("create");
    setItems(updatedItems);
    setLocalStorage("items", updatedItems);

    setFormItem({ title: "", note: "" });
  };

  const handleDelete = (id) => {
    const newItem = items.filter((item) => item.id !== id);

    setItems(newItem);
    setLocalStorage("items", [newItem]);
  };

  return (
    <div className="container text-center">
      <Form mode={mode} item={formItem} onCreate={handleCreate} onUpdate={handleUpdate} onInputChange={handleInputChange} />
      <br />
      <Notes items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
