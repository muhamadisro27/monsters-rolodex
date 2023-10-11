import React, { Fragment } from "react";
import "../style/card.style.css";
import Card from "./Card";

export default function CardList({monsters}) {
  return (
    <div className="card-list">
      {monsters.length > 0 ? (
        monsters.map((monster) => {
          return (
            <Fragment key={monster.id}>
              <Card monster={monster} />
            </Fragment>
          );
        })
      ) : (
        <p>No Data.</p>
      )}
    </div>
  );
}
