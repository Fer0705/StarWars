import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
export default function LandingPage() {
  return (
    <>
      <Link to="/films">
        <img
          className={style.img}
          src="https://imgs.search.brave.com/rt9wvameHaGFdHTuFpj3LhhRRoi2a3a3Z7Ytq2f2ITw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/eHRyYWZvbmRvcy5j/b20vd2FsbHBhcGVy/cy9zdGFyLXdhcnMt/bG9nby0zNjU0Lmpw/Zw"
          alt="logo"
        />
      </Link>
    </>
  );
}
