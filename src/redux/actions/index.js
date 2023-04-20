import axios from "axios";
export const GET_ALL_FILMS = "GET_ALL_FILMS";


export function getAllFilms() {
  return async function(dispatch) {
    try {
      const response = await axios.get("https://swapi.dev/api/films");
      dispatch({
        type: GET_ALL_FILMS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
