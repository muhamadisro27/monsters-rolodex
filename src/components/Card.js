import React from "react";

export default function Card({ monster }) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set${monster.id}&size=180x180`}
        alt={`monster ${monster.name}`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
}
