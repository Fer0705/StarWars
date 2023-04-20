import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilms } from "../../redux/actions";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import style from "./Films.module.css";
import Logito from "../../utils/logito.png";
import image1 from "../../utils/images/episode4.jpg";
import image2 from "../../utils/images/episode5.jpg";
import image3 from "../../utils/images/episode6.jpg";
import image4 from "../../utils/images/episode1.jpg";
import image5 from "../../utils/images/episode2.jpg";
import image6 from "../../utils/images/episode3.jpg";

function Films() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const allFilms = films.results;

  console.log("TODAS LAS PELIS", allFilms);

  useEffect(() => {
    dispatch(getAllFilms());
  }, [dispatch]);

  return (
    <>
      <Link to="/">
        <img
          className={style.logo}
          src={Logito}
          alt="logo"
          width={"100px"}
          height={"100px"}
        />
      </Link>
      <div className={style.main}>
        {allFilms &&
          allFilms.map((f) => (
            <div key={f.title} className={style.card}>
              <div className={style.cardfront}>
                {/* <p>{f.title}</p> */}
                <img
                  src={
                    f.episode_id === 1
                      ? image4
                      : f.episode_id === 2
                      ? image5
                      : f.episode_id === 3
                      ? image6
                      : f.episode_id === 4
                      ? image1
                      : f.episode_id === 5
                      ? image2
                      : f.episode_id === 6
                      ? image3
                      : null
                  }
                  alt="logo"
                  height={"300px"}
                  width={"280px"}
                />
              </div>
              <div className={style.cardback}>
                <Card
                  nombre={f.title}
                  numDeEpisodio={f.episode_id}
                  director={f.director}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Films;
