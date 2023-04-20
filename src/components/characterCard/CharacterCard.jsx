import React from "react";
import style from "./CharacterCard.module.css";

export default function Card({ name, gender, eye_color }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.characterCard}>
        <h2
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {name}
        </h2>
        <div className={style.infoContainer}>
          <p style={{ marginLeft: "3px" }}>
            Eye color: <strong style={{ color: "white" }}>{eye_color}</strong>
          </p>
          <p>
            Gender: <strong style={{ color: "white" }}>{gender}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
