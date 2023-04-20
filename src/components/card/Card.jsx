import React from "react";
import style from "../card/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ nombre, numDeEpisodio, director, personajes }) {
  return (
    <div className={style.card}>
      <h3>Episodio Nro: {numDeEpisodio} </h3>
      <h1> {nombre}</h1>
      <h3>Director: {director}</h3>
      <Link
        to={`/films/${
          numDeEpisodio <= 3 ? numDeEpisodio + 3 : numDeEpisodio - 3
        }/characters`}
      >
        <button className={style.button}>Ver Personajes</button>
      </Link>
    </div>
  );
}
