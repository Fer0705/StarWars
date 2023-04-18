// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllFilms } from "../redux/actions";
// import Card from "../components/card/Card";

// function Films() {
//   const dispatch = useDispatch();
//   const films = useSelector((state) => state.films);
//   const allFilms = films.results;

//   console.log("TODAS LAS PELIS", allFilms);

//   useEffect(() => {
//     dispatch(getAllFilms());
//   }, [dispatch]);

//   return (
//     // Renderizado del componente
//     <>
//       <p> LISTADO DE FILMS</p>
//       <div>
//         {allFilms ? (
//           allFilms.map((f) => (
//             <div key={f.episode_id}>
//               <Card
//                 nombre={f.title}
//                 numDeEpisodio={f.episode_id}
//                 director={f.director}
//                 personajes={f.url}
//               />
//             </div>
//           ))
//         ) : (
//           <p>Cargando...</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Films;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilms } from "../../redux/actions";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import style from "./Films.module.css";

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
      <h1 className={style.title}> LISTADO DE FILMS</h1>
      <div className={style.main}>
        {allFilms ? (
          allFilms.map((f) => (
            <div key={f.title} className={style.card}>
              <Card
                nombre={f.title}
                numDeEpisodio={f.episode_id}
                director={f.director}
              />
              <Link
                to={`/films/${
                  f.episode_id <= 3 ? f.episode_id + 3 : f.episode_id - 3
                }/characters`}
              >
                <button className={style.button}>
                  {`ver los ${f.characters.length} personajes del film`}
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}

export default Films;
