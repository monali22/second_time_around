import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function InputText(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextAreaText(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtnn(props) {
  return (
    <button {...props} style={{ marginLeft: "40%",
    marginRight: "auto",
    width: "20%" }} className="btn btn-success">
      {props.children}
    </button>
  );
}
