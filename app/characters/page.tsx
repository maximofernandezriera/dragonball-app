"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { getCharacters } from '../lib/dragonball-api';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../interfaces/Character';
import styles from '../styles/Home.module.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Page: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getCharacters(currentPage);
      console.log("Data from getCharacters:", data);
      setCharacters(data);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dragon Ball Characters</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Dragon Ball Characters</h1>
        <HamburgerMenu />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.grid}>
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      </main>
    </div>
  );
};

export default Page;