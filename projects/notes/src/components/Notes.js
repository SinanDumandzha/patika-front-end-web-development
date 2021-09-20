import React from "react";

const Notes = ({ items, onEdit, onDelete }) =>
  items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        <h4 className="card_title">{title}</h4>
        {note}
        <div className="card_action">
          <button className="deleteBtn" onClick={() => onDelete(id)}>
            Delete
          </button>
          <button className="editBtn" onClick={() => onEdit(index)}>
            Edit
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center">There is no notes to show</p>
  );

export default Notes;
