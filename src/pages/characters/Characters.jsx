import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "../../components/characterCard/CharacterCard";
import style from "./Characters.module.css";

function Characters() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  console.log("PERSONAJES", characters);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        const data = response.data;
        const charactersUrls = data.characters;
        const promises = charactersUrls.map(async (url) => {
          const characterResponse = await axios.get(url);
          const characterData = characterResponse.data;
          return {
            name: characterData.name,
            gender: characterData.gender,
            eye_color: characterData.eye_color,
            url: characterData.url,
          };
        });
        const charactersData = await Promise.all(promises);
        setCharacters(charactersData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [id]);

  return (
    <>
      <h1 className={style.title}>PERSONAJES DE LA PELICULA</h1>
      <div className={style.char}>
        {characters.length > 0 ? (
          characters.map((c) => (
            <div key={c.url} className={style.cards}>
              <CharacterCard
                name={c.name}
                gender={c.gender}
                eye_color={c.eye_color}
              />
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}

export default Characters;
