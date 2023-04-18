import axios from 'axios'

export const getCharacter = async () => {
    const infoCharacter = await axios.get(
      `https://swapi.dev/api/people` // quizas tengo que hacerlo al film y de ahi entrar a character y guardarlo(?)
    );
    const character = await infoCharacter.data.map((c) => {
      return {
         nombre: c.name,
         colorDeOjos: c.eye_color,
         genero: c.gender
      };
    });
  
    return character;
  };