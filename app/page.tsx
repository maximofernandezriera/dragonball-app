"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { getCharacters } from './lib/dragonball-api';
import CharacterCard from './components/CharacterCard';
import { Character } from './interfaces/characters';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getCharacters(currentPage);
      setCharacters(data);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dragon Ball Characters</title>
      </Head>
      <h1 className={styles.title}>Dragon Ball Characters</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
      )}
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default Home;