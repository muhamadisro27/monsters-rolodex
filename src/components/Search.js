import React from "react";
import "../style/search-box.style.css";

export default function Search({ handleChange, type, className, placeholder }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`search-box ${className}`}
        onChange={handleChange}
      />
    </>
  );
}
