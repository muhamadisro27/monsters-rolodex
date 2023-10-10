import React, { Component } from "react";
import '../style/card.style.css';
import Card from "./Card";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.length > 0 ? (
          monsters.map((monster) => {
            return (
              <Card monster={monster} />
            );
          })
        ) : (
          <p>No Data.</p>
        )}
      </div>
    );
  }
}
