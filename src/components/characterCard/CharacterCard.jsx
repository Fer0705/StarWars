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
            // boxShadow: "12px 12px 12px #fff",
          }}
        >
          {" "}
          {name}
        </h2>
        <div className={style.infoContainer}>
          <p>
            <u>Gender:</u> <strong>{gender}</strong>{" "}
          </p>
          <p style={{ marginLeft: "3px" }}>
            <u>Eye color:</u> <strong>{eye_color}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
