import React from "react";
import ReactDOM from "react-dom";

const fname = "Prashant";
const lname = "Shukla";
const date = new Date();
const year = date.getFullYear();
ReactDOM.render(
  <div>
    <h1>Created by {fname + " " + lname}</h1>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
