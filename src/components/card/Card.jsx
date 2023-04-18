import React from "react";
import style from "../card/Card.module.css";

export default function Card({ nombre, numDeEpisodio, director, personajes }) {
  return (
    <div className={style.card}>
      <h1> {nombre}</h1>
      <h4>Episodio Nro: {numDeEpisodio} </h4>
      <h4>Director: {director}</h4>
      {/* <h4>Ver los {personajes} personajes</h4> */}
      {/* <button>
        <h4>Ver Personajes</h4>
      </button> */}
    </div>
  );
}
