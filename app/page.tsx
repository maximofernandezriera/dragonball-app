"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getCharacters } from './lib/dragonball-api';
import CharacterCard from './components/CharacterCard';
import { Character } from './interfaces/Character';
import styles from './styles/Home.module.css';
import HamburgerMenu from './components/HamburgerMenu';

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
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/calendar">Calendar</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <Link href="/statistics">
              <button>View Statistics</button>
            </Link>
          </ul>
        </nav>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </main>
    </div>
  );
};

export default Page;