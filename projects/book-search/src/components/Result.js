import React from "react";

const Result = ({ result }) => {
  return (
    <div className="row d-flex justify-content-center mt-5">
      {result.map((book, id) => (
        <div key={id} className="card m-3 text-center" style={{ width: "15%", backgroundColor: "#dadada" }}>
          <img
            src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`}
            alt={book.volumeInfo.title}
            className="mt-3"
            style={{ height: "15rem" }}
          />
          <a className="btn btn-secondary btn my-3" role="button" aria-disabled="true" href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">
            Details
          </a>
        </div>
      ))}
    </div>
  );
};

export default Result;
