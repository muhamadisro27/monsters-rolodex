import React, { Component } from "react";
import "../style/search-box.style.css";

export default class Search extends Component {
  render() {
    const {handleChange, type, className, placeholder} = this.props;
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
}
