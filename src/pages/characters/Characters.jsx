import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "../../components/characterCard/CharacterCard";
import style from "./Characters.module.css";
import Logito from "../../utils/logito.png";
import { Link } from "react-router-dom";
function Characters() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [eyeColors, setEyeColors] = useState([]);
  const [filterEyes, setFilterEyes] = useState("");

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
            eye_color: characterData.eye_color.split(",")[0],
            url: characterData.url,
          };
        });
        const charactersData = await Promise.all(promises);
        setCharacters(charactersData);

        // Obtener opciones de color de ojos
        const eyeColors = charactersData.reduce((acc, c) => {
          if (!acc.includes(c.eye_color.split(",")[0])) {
            acc.push(c.eye_color.split(",")[0]);
          }
          return acc;
        }, []);
        setEyeColors(eyeColors);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [id]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleEyeColorFilterChange = (event) => {
    setFilterEyes(event.target.value);
  };

  // Modificación para mostrar todos los personajes antes de aplicar el filtro
  let filteredCharacters = characters;
  if (filter) {
    filteredCharacters = characters.filter(
      (c) => c.gender.toLowerCase() === filter.toLowerCase()
    );
  }
  if (filterEyes) {
    filteredCharacters = filteredCharacters.filter(
      (c) =>
        c.eye_color.split(",")[0].toLowerCase() === filterEyes.toLowerCase()
    );
  }

  // Nueva variable para mostrar los personajes en la vista
  const displayedCharacters =
    filteredCharacters.length > 0 ? filteredCharacters : null;

  const options = [
    { value: "", label: "All" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "hermaphrodite", label: "Hermaphrodite" },
    { value: "n/a", label: "Unknow" },
  ];

  return (
    <>
      <Link to="/films">
        <img
          className={style.logo}
          src={Logito}
          alt="logo"
          width={"100px"}
          height={"100px"}
        />
      </Link>
      <div className={style.filter}>
        <label
          htmlFor="filter"
          className={style.label}
          style={{ color: "yellow" }}
        >
          Gender:
        </label>
        <div className={style.gender}>
          {/* <select id="filter" value={filter} onChange={handleFilterChange}>
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select> */}
          {options.map((o) => (
            <label className={style.label} key={o.value}>
              <input
                type="radio"
                style={{ backgroundColor: "yellow" }}
                name="filter"
                value={o.value}
                checked={filter === o.value}
                onChange={handleFilterChange}
              />
              {o.label}
            </label>
          ))}
        </div>
        <label
          htmlFor="filter-eyes"
          className={style.label}
          style={{ color: "yellow" }}
        >
          Eye Color:
        </label>
        <div className={style.eyecolor}>
          {/* <select
            id="filter-eyes"
            value={filterEyes}
            onChange={handleEyeColorFilterChange}
          >
            <option value="">All</option>
            {eyeColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select> */}
          <label className={style.label}>
            <input
              type="radio"
              name="filterEyes"
              value=""
              checked={filterEyes === ""}
              onChange={handleEyeColorFilterChange}
            />
            All
          </label>
          {eyeColors.map((color) => (
            <label className={style.label} key={color}>
              <input
                type="radio"
                name="filterEyes"
                value={color}
                checked={filterEyes === color}
                onChange={handleEyeColorFilterChange}
              />
              {color}
            </label>
          ))}
        </div>
      </div>
      <div className={style.char}>
        {filteredCharacters.length > 0 ? (
          displayedCharacters.map((c) => (
            <div key={c.url} className={style.cards}>
              <CharacterCard
                name={c.name}
                gender={c.gender}
                eye_color={c.eye_color}
              />
            </div>
          ))
        ) : (
          <div style={{ gridColumn: "1/-1" }}>
            <h3>No characters found</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Characters;
