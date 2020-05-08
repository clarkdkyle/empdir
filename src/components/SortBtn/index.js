import React from "react";
import "./style.css";

function SortBtn(props) {
  return (
    <button onClick={() => props.handleSort(props.name)} className="filter btn btn-primary">
        Sort Alphabetically
  </button>
  );
}

export default SortBtn;