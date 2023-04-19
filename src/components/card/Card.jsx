import React from "react";
import style from "../card/Card.module.css";

export default function Card({ nombre, numDeEpisodio, director, personajes }) {
  return (
    <div className={style.card}>
      <h3>Episodio Nro: {numDeEpisodio} </h3>
      <h1> {nombre}</h1>
      <h3>Director: {director}</h3>
      {/* <h4>Ver los {personajes} personajes</h4> */}
      {/* <button>
        <h4>Ver Personajes</h4>
      </button> */}
    </div>
  );
}
