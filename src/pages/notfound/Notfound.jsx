import React from "react";
import { Link } from "react-router-dom";
import Logito from "../../utils/logito.png";
import notfound from "./notfound.png";
import style from "./Notfound.module.css";

export default function Notfound() {
  return (
    <>
      <div className={style.error}>
        <div className={style.back}>
          <Link to="/">
            <img src={Logito} alt="logo" width={"100px"} height={"100px"} />
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={notfound} alt="notfound" width={"800px"} height={"600px"} />
        </div>
      </div>
    </>
  );
}
