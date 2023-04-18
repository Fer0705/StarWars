import React from "react";

export default function Card({ name, gender, eye_color }) {
  return (
    <div>
      <h1> {name}</h1>
      <h4>gender: {gender} </h4>
      <h4>eye_color: {eye_color}</h4>
    </div>
  );
}
