import React from "react";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchBar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.49"
        height="17.49"
        viewBox="0 0 17.49 17.49"
      >
        <path
          id="Path_43"
          data-name="Path 43"
          d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
          transform="translate(-3 -3)"
          fill="#afafaf"
        />
      </svg>
      <input type="text" placeholder="Study sets"></input>
    </div>
  );
}

export default SearchBar;
