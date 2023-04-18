import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>STAR WARS</h1>
      <Link to="/films">
        <button>INGRESAR</button>
      </Link>
    </>
  );
}
