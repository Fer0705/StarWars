import React from "react";

export default function Card({ name, gender, eye_color }) {
  return (
    <div>
      <h1 style={{ fontWeight: "bold", fontStyle: "italic" }}> {name}</h1>
      <h3>Gender: {gender} </h3>
      <h3>Eye color: {eye_color}</h3>
    </div>
  );
}
