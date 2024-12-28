"use client";
import React, { useState } from "react";
import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import styles from "../styles/Characters.module.css";

const charactersData = {
  items: [
    {
      id: 1,
      name: "Goku",
      ki: "60.000.000",
      maxKi: "90 Septillion",
      race: "Saiyan",
      gender: "Male",
      description: "El protagonista de la serie, conocido por su gran poder y personalidad amigable...",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 2,
      name: "Vegeta",
      ki: "54.000.000",
      maxKi: "19.84 Septillion",
      race: "Saiyan",
      gender: "Male",
      description: "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters...",
      image: "https://dragonball-api.com/characters/vegeta_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 3,
      name: "Piccolo",
      ki: "2.000.000",
      maxKi: "500.000.000",
      race: "Namekian",
      gender: "Male",
      description: "Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre...",
      image: "https://dragonball-api.com/characters/picolo_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 4,
      name: "Bulma",
      ki: "0",
      maxKi: "0",
      race: "Human",
      gender: "Female",
      description: "Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime...",
      image: "https://dragonball-api.com/characters/bulma.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 5,
      name: "Freezer",
      ki: "530.000",
      maxKi: "52.71 Septillion",
      race: "Frieza Race",
      gender: "Male",
      description: "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
      image: "https://dragonball-api.com/characters/Freezer.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 6,
      name: "Zarbon",
      ki: "20.000",
      maxKi: "30.000",
      race: "Frieza Race",
      gender: "Male",
      description: "Zarbon es uno de los secuaces de Freezer y un luchador poderoso.",
      image: "https://dragonball-api.com/characters/zarbon.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 7,
      name: "Dodoria",
      ki: "18.000",
      maxKi: "20.000",
      race: "Frieza Race",
      gender: "Male",
      description: "Dodoria es otro secuaz de Freezer conocido por su brutalidad.",
      image: "https://dragonball-api.com/characters/dodoria.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 8,
      name: "Ginyu",
      ki: "9.000",
      maxKi: "25.000",
      race: "Frieza Race",
      gender: "Male",
      description: "Ginyu es el líder del la élite de mercenarios de mayor prestigio del Ejército de Freeza...",
      image: "https://dragonball-api.com/characters/ginyu.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 9,
      name: "Celula",
      ki: "250.000.000",
      maxKi: "5 Billion",
      race: "Android",
      gender: "Male",
      description: "Cell conocido como Célula en España, es un bioandroide creado por la computadora del Dr. Gero...",
      image: "https://dragonball-api.com/characters/celula.webp",
      affiliation: "Freelancer",
      deletedAt: null
    },
    {
      id: 10,
      name: "Gohan",
      ki: "45.000.000",
      maxKi: "40 septillion",
      race: "Saiyan",
      gender: "Male",
      description: "Son Gohanda en su tiempo en España, o simplemente Gohan en Hispanoamérica...",
      image: "https://dragonball-api.com/characters/gohan.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    }
  ],
  meta: {
    totalItems: 58,
    itemCount: 10,
    itemsPerPage: 10,
    totalPages: 6,
    currentPage: 1
  },
  links: {
    first: "https://dragonball-api.com/api/characters?limit=10",
    previous: "",
    next: "https://dragonball-api.com/api/characters?page=2&limit=10",
    last: "https://dragonball-api.com/api/characters?page=6&limit=10"
  }
};

const CharactersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCharacters = charactersData.items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Head>
        <title>Dragon Ball Characters</title>
      </Head>
      <main className={styles.main}>
        <HamburgerMenu />
        <div className={styles.hero}>
          <h1 className={styles.title}>Dragon Ball Characters</h1>
          <p className={styles.subtitle}>Meet the characters of Dragon Ball.</p>
          <img src="/characters-banner.jpg" alt="Characters Banner" className={styles.banner} />
        </div>
        <section className={styles.content}>
          {selectedCharacters.map((character) => (
            <div key={character.id} className={styles.characterCard}>
              <img src={character.image} alt={character.name} className={styles.characterImage} />
              <h2>{character.name}</h2>
              <p><strong>Race:</strong> {character.race}</p>
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Ki:</strong> {character.ki}</p>
              <p><strong>Max Ki:</strong> {character.maxKi}</p>
              <p>{character.description}</p>
            </div>
          ))}
        </section>
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage} disabled={startIndex + itemsPerPage >= charactersData.items.length}>
            Next Page
          </button>
        </div>
      </main>
    </>
  );
};

export default CharactersPage;