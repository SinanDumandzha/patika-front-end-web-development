import React from "react";

const Header = ({ handleSubmit, handleChange }) => {
  return (
    <div className="container-fluid d-flex justify-content-between" style={{ backgroundColor: "black" }}>
      <h1>Book Search</h1>
      <div className="my-auto">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for Book" autoComplete="off" />
          </div>
          <button type="submit" className="btn btn-secondary ms-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
