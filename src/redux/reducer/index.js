import { GET_ALL_FILMS } from "../actions";

const initialState = {
  films: [],
  characters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
