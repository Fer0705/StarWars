import axios from 'axios'

export const getFilms = async () => {
    const infoFilms = await axios.get(
      'https://swapi.dev/api/films'
    );
    const films = await infoFilms.data.map((f) => {
      return {
        nombre: f.title,
        numDeEpisodio: f.episode_id,
        director: f.director,
        personajes: f.characters,
      };
    });
  
    return films;
  };
  console.log(getFilms);