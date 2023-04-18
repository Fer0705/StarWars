import axios from "axios";
export const GET_ALL_FILMS = "GET_ALL_FILMS";

// export function getAllFilms() {
//     return async function (dispatch) {
//       let films = await axios.get("https://swapi.dev/api/films");
//       return dispatch({
//         type: GET_ALL_FILMS,
//         payload: films.data, 
//       });
//     };
//   }

export function getAllFilms() {
  return function(dispatch) {
    return axios.get("https://swapi.dev/api/films")
      .then(response => {
        dispatch({
          type: GET_ALL_FILMS,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        // Manejo de errores
      });
  };
}
